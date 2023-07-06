const { ObjectId } = require('mongodb');

const records = [
  {
    _id: new ObjectId("649b312255d75cce3b49635b"),
    "date": '06_27_2023_11_57_38',
    "module_name": "RedisSnapshot",
    "results": {
      RedisSnapshot: {
        test_names: [
          'LocationMatrixTestDRAM_0',
          'LocationMatrixTestDRAM_1',
          'LocationMatrixTestDRAM_2',
          'LocationMatrixTestDRAM_3',
          'LocationMatrixTestDRAM_4',
          'LocationMatrixTestDRAM_5',
          'LocationMatrixTestDRAM_6',
          'LocationMatrixTestDRAM_7',
          'LocationMatrixTestDRAM_8',
          'LocationMatrixTestDRAM_9',
          'LocationMatrixTestDRAM_10',
          'LocationMatrixTestDRAM_11',
          'CheckpointNegativeMatrixDRAM_12',
          'CheckpointNegativeMatrixDRAM_13',
          'RestoreNegativeMatrixDRAM_14',
          'RestoreNegativeMatrixDRAM_15',
          'RootUserPrivilegeMatrix_16',
          'RootUserPrivilegeMatrix_17'
        ],
        test_desc: [
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_0, checkpoint location name local_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_1, checkpoint location name local_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_2, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_3, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.103',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_4, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_5, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_6, checkpoint location name local_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_7, checkpoint location name local_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_8, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_9, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_10, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_11, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'start app as atfuser1. Check point as atfuser2. Expecting checkpoint fail with error=Error Code: 1601 Error Detail: Not authorized for current user to operate Only root or process owner can checkpoint .',
          'start app as root. Check point as atfuser2. Expecting checkpoint fail with error=Error Code: 1601 Error Detail: Not authorized for current user to operate Only root or process owner can checkpoint .',
          'app user atfuser1, check point user atfuser1, restore user atfuser2, checkpoint path $chkp_loc, checkpoint location name $chkp_loc_name, checkpoint host $chkp_host, restore host $rs_host, expected_error $expected_error',
          'app user root, check point user root, restore user atfuser2, checkpoint path $chkp_loc, checkpoint location name $chkp_loc_name, checkpoint host $chkp_host, restore host $rs_host, expected_error $expected_error',
          'Start app as atfuser1. Checkpoint as root. Restore checkpoint as atfuser1',
          'Start app as atfuser1. Checkpoint as atfuser1. Restore checkpoint as root'
        ],
        test_results: [
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED'
        ],
        test_exceptions: [
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null
        ],
        bt: [
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null
        ]
      },
      meta_data: {
        sys_vendor: 'Red Hat',
        product_name: 'KVM',
        platform: 'Linux-3.10.0-1160.76.1.el7.x86_64-x86_64-with-glibc2.17',
        distro: 'CentOS Linux 7 (Core)',
        mvmcli_version: 'v3.1.0-7201843-master-release',
        log_dir: '/automation/atf/logs/jenkins/ab_atf_test/36/None_06_27_2023_11_36_12/RedisSnapshot_0x7fa127d7ceb0'
      }
    }
  },
  {
    _id: new ObjectId("649b312255d75cce3b49635a"),
    "date": '06_26_2023_11_57_38',
    "module_name": "RedisSnapshot",
    "results": {
      RedisSnapshot: {
        test_names: [
          'LocationMatrixTestDRAM_0',
          'LocationMatrixTestDRAM_1',
          'LocationMatrixTestDRAM_2',
          'LocationMatrixTestDRAM_3',
          'LocationMatrixTestDRAM_4',
          'LocationMatrixTestDRAM_5',
          'LocationMatrixTestDRAM_6',
          'LocationMatrixTestDRAM_7',
          'LocationMatrixTestDRAM_8',
          'LocationMatrixTestDRAM_9',
          'LocationMatrixTestDRAM_10',
          'LocationMatrixTestDRAM_11',
          'CheckpointNegativeMatrixDRAM_12',
          'CheckpointNegativeMatrixDRAM_13',
          'RestoreNegativeMatrixDRAM_14',
          'RestoreNegativeMatrixDRAM_15',
          'RootUserPrivilegeMatrix_16',
          'RootUserPrivilegeMatrix_17'
        ],
        test_desc: [
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_0, checkpoint location name local_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_1, checkpoint location name local_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_2, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_3, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.103',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_4, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_5, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_6, checkpoint location name local_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_7, checkpoint location name local_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_8, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_9, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_10, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_11, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'start app as atfuser1. Check point as atfuser2. Expecting checkpoint fail with error=Error Code: 1601 Error Detail: Not authorized for current user to operate Only root or process owner can checkpoint .',
          'start app as root. Check point as atfuser2. Expecting checkpoint fail with error=Error Code: 1601 Error Detail: Not authorized for current user to operate Only root or process owner can checkpoint .',
          'app user atfuser1, check point user atfuser1, restore user atfuser2, checkpoint path $chkp_loc, checkpoint location name $chkp_loc_name, checkpoint host $chkp_host, restore host $rs_host, expected_error $expected_error',
          'app user root, check point user root, restore user atfuser2, checkpoint path $chkp_loc, checkpoint location name $chkp_loc_name, checkpoint host $chkp_host, restore host $rs_host, expected_error $expected_error',
          'Start app as atfuser1. Checkpoint as root. Restore checkpoint as atfuser1',
          'Start app as atfuser1. Checkpoint as atfuser1. Restore checkpoint as root'
        ],
        test_results: [
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED'
        ],
        test_exceptions: [
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null
        ],
        bt: [
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null
        ]
      },
      meta_data: {
        sys_vendor: 'Red Hat',
        product_name: 'KVM',
        platform: 'Linux-3.10.0-1160.76.1.el7.x86_64-x86_64-with-glibc2.17',
        distro: 'CentOS Linux 7 (Core)',
        mvmcli_version: 'v3.1.0-7201843-master-release',
        log_dir: '/automation/atf/logs/jenkins/ab_atf_test/36/None_06_27_2023_11_36_12/RedisSnapshot_0x7fa127d7ceb0'
      }
    }
  },
  {
    _id: new ObjectId("649b312255d75cce3b49635c"),
    "date": '06_27_2023_11_57_38',
    "module_name": "OtherTest",
    "results": {
      OtherTest: {
        test_names: [
          'LocationMatrixTestDRAM_0',
          'LocationMatrixTestDRAM_1',
          'LocationMatrixTestDRAM_2',
          'LocationMatrixTestDRAM_3',
          'LocationMatrixTestDRAM_4',
          'LocationMatrixTestDRAM_5',
          'LocationMatrixTestDRAM_6',
          'LocationMatrixTestDRAM_7',
          'LocationMatrixTestDRAM_8',
          'LocationMatrixTestDRAM_9',
          'LocationMatrixTestDRAM_10',
          'LocationMatrixTestDRAM_11',
          'CheckpointNegativeMatrixDRAM_12',
          'CheckpointNegativeMatrixDRAM_13',
          'RestoreNegativeMatrixDRAM_14',
          'RestoreNegativeMatrixDRAM_15',
          'RootUserPrivilegeMatrix_16',
          'RootUserPrivilegeMatrix_17'
        ],
        test_desc: [
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_0, checkpoint location name local_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_1, checkpoint location name local_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_2, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_3, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.103',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_4, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_5, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_6, checkpoint location name local_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_7, checkpoint location name local_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_8, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_9, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_10, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_11, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'start app as atfuser1. Check point as atfuser2. Expecting checkpoint fail with error=Error Code: 1601 Error Detail: Not authorized for current user to operate Only root or process owner can checkpoint .',
          'start app as root. Check point as atfuser2. Expecting checkpoint fail with error=Error Code: 1601 Error Detail: Not authorized for current user to operate Only root or process owner can checkpoint .',
          'app user atfuser1, check point user atfuser1, restore user atfuser2, checkpoint path $chkp_loc, checkpoint location name $chkp_loc_name, checkpoint host $chkp_host, restore host $rs_host, expected_error $expected_error',
          'app user root, check point user root, restore user atfuser2, checkpoint path $chkp_loc, checkpoint location name $chkp_loc_name, checkpoint host $chkp_host, restore host $rs_host, expected_error $expected_error',
          'Start app as atfuser1. Checkpoint as root. Restore checkpoint as atfuser1',
          'Start app as atfuser1. Checkpoint as atfuser1. Restore checkpoint as root'
        ],
        test_results: [
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED'
        ],
        test_exceptions: [
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null
        ],
        bt: [
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null
        ]
      },
      meta_data: {
        sys_vendor: 'Red Hat',
        product_name: 'KVM',
        platform: 'Linux-3.10.0-1160.76.1.el7.x86_64-x86_64-with-glibc2.17',
        distro: 'CentOS Linux 7 (Core)',
        mvmcli_version: 'v3.1.0-7201843-master-release',
        log_dir: '/automation/atf/logs/jenkins/ab_atf_test/36/None_06_27_2023_11_36_12/RedisSnapshot_0x7fa127d7ceb0'
      }
    }
  },
  {
    _id: new ObjectId("649b312255d75cce3b49635d"),
    "date": '06_26_2023_11_57_38',
    "module_name": "OtherTest",
    "results": {
      OtherTest: {
        test_names: [
          'LocationMatrixTestDRAM_0',
          'LocationMatrixTestDRAM_1',
          'LocationMatrixTestDRAM_2',
          'LocationMatrixTestDRAM_3',
          'LocationMatrixTestDRAM_4',
          'LocationMatrixTestDRAM_5',
          'LocationMatrixTestDRAM_6',
          'LocationMatrixTestDRAM_7',
          'LocationMatrixTestDRAM_8',
          'LocationMatrixTestDRAM_9',
          'LocationMatrixTestDRAM_10',
          'LocationMatrixTestDRAM_11',
          'CheckpointNegativeMatrixDRAM_12',
          'CheckpointNegativeMatrixDRAM_13',
          'RestoreNegativeMatrixDRAM_14',
          'RestoreNegativeMatrixDRAM_15',
          'RootUserPrivilegeMatrix_16',
          'RootUserPrivilegeMatrix_17'
        ],
        test_desc: [
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_0, checkpoint location name local_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_1, checkpoint location name local_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_2, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_3, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.103',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_4, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.58',
          'app user atfuser1, check point user atfuser1, restore user atfuser1, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_5, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_6, checkpoint location name local_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /var/memverge/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_7, checkpoint location name local_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_8, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_9, checkpoint location name nfs_storage, checkpoint host 10.2.4.58, restore host 10.2.4.103',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_10, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.58',
          'app user root, check point user root, restore user root, checkpoint path /automation/atf_checkpoints/RedisSnapshot_0x7fa127d7ceb0/LocationMatrixTestDRAM_11, checkpoint location name nfs_storage, checkpoint host 10.2.4.103, restore host 10.2.4.103',
          'start app as atfuser1. Check point as atfuser2. Expecting checkpoint fail with error=Error Code: 1601 Error Detail: Not authorized for current user to operate Only root or process owner can checkpoint .',
          'start app as root. Check point as atfuser2. Expecting checkpoint fail with error=Error Code: 1601 Error Detail: Not authorized for current user to operate Only root or process owner can checkpoint .',
          'app user atfuser1, check point user atfuser1, restore user atfuser2, checkpoint path $chkp_loc, checkpoint location name $chkp_loc_name, checkpoint host $chkp_host, restore host $rs_host, expected_error $expected_error',
          'app user root, check point user root, restore user atfuser2, checkpoint path $chkp_loc, checkpoint location name $chkp_loc_name, checkpoint host $chkp_host, restore host $rs_host, expected_error $expected_error',
          'Start app as atfuser1. Checkpoint as root. Restore checkpoint as atfuser1',
          'Start app as atfuser1. Checkpoint as atfuser1. Restore checkpoint as root'
        ],
        test_results: [
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED',
          'PASSED', 'PASSED', 'PASSED'
        ],
        test_exceptions: [
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null
        ],
        bt: [
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null, null, null,
          null, null
        ]
      },
      meta_data: {
        sys_vendor: 'Red Hat',
        product_name: 'KVM',
        platform: 'Linux-3.10.0-1160.76.1.el7.x86_64-x86_64-with-glibc2.17',
        distro: 'CentOS Linux 7 (Core)',
        mvmcli_version: 'v3.1.0-7201843-master-release',
        log_dir: '/automation/atf/logs/jenkins/ab_atf_test/36/None_06_27_2023_11_36_12/RedisSnapshot_0x7fa127d7ceb0'
      }
    }
  }
]
async function createDashboard() {
  
  // fetch from app.js data route - commented out for testing
  const response = await fetch("/data");
  const records = await response.json();
  // Update the table HTML with records data
  document.getElementById("table").innerHTML = generateTableHTML(records);
}

function generateTableHTML(records) {
  let tableHTML = "";
  let headerHTML = "<tr class='tRow'><th class='tHeader'>Date</th>";
  const testModuleList = [];
  const testDateList = [];

  records.forEach((r) => { 
    // add unique module names into list and generate html table header
    // store unique test dates for table
    const moduleName = r["module_name"];
    if (!testModuleList.includes(moduleName)) {
      testModuleList.push(moduleName);
      headerHTML += `<th class='tHeader'>${moduleName}</th>`;
    };
    const testDate = r["date"].substring(0, 10);
    if (!testDateList.includes(testDate)) {
      testDateList.push(testDate);
    };
  });
  headerHTML += "</tr>";
  tableHTML += headerHTML;
  // sort test dates most recent to least
  testDateList.sort((a, b) => {
    const dateA = new Date(a.replace(/_/g, '/'));
    const dateB = new Date(b.replace(/_/g, '/'));
  
    return dateB - dateA;
  });

  // create rows of data
  testDateList.forEach((date) => {
    let rowHTML = `<tr class='tRow'><td class='tData'>${date}</td>`;
    testModuleList.forEach((moduleName) => {
      // Find the corresponding record for the date and module
      const record = records.find((r) => r["date"].startsWith(date) && r["module_name"] === moduleName);
      if (record) {
        // Add the table cell with the desired property from the record
        rowHTML += `<td class='tData'>${resultSummary(record["results"][moduleName].test_results)}</td>`;
      } else {
        // No record found for the date and module, add an empty cell
        rowHTML += "<td class='tData'></td>";
      }
    });
    rowHTML += "</tr>";
    tableHTML += rowHTML;
  });
  console.log(tableHTML);
  return tableHTML;
}

function resultSummary(results) {
  let failed = 0; let passed = 0; let skipped = 0;
  results.forEach((r) => {
    if (r == "PASSED") {
      passed += 1;
    }
    else if (r == "FAILED") {
      failed += 1;
    }
    else {
      skipped += 1;
    };
  });
  return ("Failed: " + failed + "| Skipped: " + skipped + "\nPassed: " + passed + "| Total: " + results.length);
}


generateTableHTML(records);