require.config({
    baseUrl: '/',
    paths: {
      app: 'app'
    }
});
  
require(['app'], function (app) {
    // Start the app
    app.init();
});