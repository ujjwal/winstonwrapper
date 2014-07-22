'use strict';

var log = bunyan.createLogger({
    name: options.logName || 'default',
    streams: [{
        type: 'rotating-file',
        path: options.outLogFile,
        period: '1d',
        count: 7
    }]
});

module.exports = log;