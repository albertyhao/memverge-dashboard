#!/root/.nvm/versions/node/v14.18.0/bin/node
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');

// const { JSDOM } = require('jsdom');

// connect to database
async function connectToMongoDB() {
  try {
    await mongoose.connect('mongodb://10.0.1.56:27017/atf', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
connectToMongoDB();

// mongoose schema to capture mongoDB data
const ResultSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  date: String,
  module_name: String,
  results: {
    test_names: [String],
    test_desc: [String],
    test_results: [String],
    test_exceptions: [String],
    bt: [String]
  },
  meta_data: {
    sys_vendor: String,
    product_name: String,
    platform: String,
    distro: String,
    mvmcli_version: String,
    log_dir: String
  }
});

const ResultModel = mongoose.model('testresult', ResultSchema); // first arg is name of collection, second arg is mongoose schema object
module.exports = ResultModel;

// Serve static files from the 'public' directory
try {
  app.use(express.static(path.join(__dirname, 'public')));
} catch {
  console.log('Express App not defined');
}


// GET route for the root URL
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public/tests.html'));
});

app.get('/modules', async (req, res) => {
  res.sendFile(path.join(__dirname, 'public/modules.html'));
});

// exposes records data for frontend js
app.get('/data', async (req, res) => {
  try {
    const records = await ResultModel.find();
    console.log("Success: found records")
    res.json(records); // Send the records data as JSON
  } catch (error) {
    console.error('Error fetching table records:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/app.js', (req, res) => {
  res.set('Content-Type', 'text/javascript');
  res.sendFile(path.join(__dirname, 'app.js'));
});

// helper functions to inject dynamic test results data into tests/:testid route

function injectHTML(file, moduleName, testDate, htmlContent) {
  const modifiedHTML = file
    .replace('{{MODULENAME}}', moduleName)
    .replace('{{TESTDATE}}', testDate)
    .replace('{{TESTHTML}}', htmlContent)
  return modifiedHTML;
}

function generateTestsHTML(testData){
  const moduleName = testData['module_name'];
  const testDate = testData['date'];
  
  let testHTML = "<table id='table'><tr class='tRow'><th class='tHeader'>Test Name</th><th class='tHeader'>Test Description</th><th class='tHeader'>Test Result</th><th class='tHeader'>Test Exceptions</th><th class='tHeader'>Test Backtrace (bt)</th></tr>";
  
  for (let i = 0; i < testData['results']['test_names'].length; i++) {
    let rowHTML = "<tr class='tRow'>";
    Object.values(testData['results']).forEach((a) => {
      rowHTML += `<td class='tData'>${a[i]}</td>`;
    })
    rowHTML += "</tr>";
    testHTML += rowHTML;
  }
  testHTML += "</table>";
  return [moduleName, testDate, testHTML];
}

app.get('/tests/:testid', async (req, res) => {
  const testId = req.params.testid;
  try {
    const testData = await ResultModel.findOne({ _id: testId}).exec();
    console.log("testdata ", testData)
    if (!testData) {
      console.log('No test document found with the specified _id ', testId);
      return res.status(404).send('Test Not Found');
    }
  
    const generatedHTML = generateTestsHTML(testData);

    fs.readFile(path.join(__dirname, 'public/tests.html'), 'utf8', (err, fileContent) => {
      if (err) {
        console.error('Error reading HTML file:', err);
        return res.status(500).send('Internal Server Error');
      }
      
      // Inject the generated HTML into the specified div
      const injectedHTML = injectHTML(fileContent, ...generatedHTML); // passes array output of generateTestsHTML() into the injectHTML function
      
      // Send the modified HTML response
      res.send(injectedHTML);
    }); 
  } catch (error) {
    console.error('Error fetching test records:', error);
    res.status(500).send('Internal Server Error');
  }

});

// start dashboard app server on 10.0.1.56/3000
const PORT = 3000;
const IP_ADDRESS = '10.0.1.56';

app.listen(PORT, IP_ADDRESS, () => {
  console.log(`Server running at http://${IP_ADDRESS}:${PORT}/`);
});

