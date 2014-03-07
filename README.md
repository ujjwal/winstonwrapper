winstonwrapper
==============

Wrapper for Winston Logger
  
  //Import the logger
  var log = require("winstonwrapper");

  //Initialize
  log.init({ "debug": true, "outLogFile": "/var/log/folder/filename.log"});
  
  log.info("fooString");
