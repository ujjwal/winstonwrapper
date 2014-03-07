winstonwrapper
==============

Wrapper for Winston Logger
  
  var log = require("winstonwrapper");
  log.init({ "debug": true, "outLogFile": "/var/log/folder/filename.log"});
  log.info("fooString");
