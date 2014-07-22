'use strict';

var log = bunyan.createLogger({
    name: options.logName || 'default',
    streams: [{
        level: 'info',
        stream: options.outLogFile
    }, {
        level: 'error',
        path: options.outLogFile
    }]
});

module.exports = log;