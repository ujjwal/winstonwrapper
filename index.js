'use strict';

var winston = require('winston'),
    util = require("util"),
    _ = require('underscore');

var ConfigurableLogger = function() {
    winston.Logger.call(this);
};

util.inherits(ConfigurableLogger, winston.Logger);


ConfigurableLogger.prototype.init = function(options) {
    this.exitOnError = false;
    var debugging = _.isBoolean(options.debug) && options.debug,
        level = debugging ? "debug" : "info";

    if (debugging) {
        this.add(winston.transports.Console, {
            level: 'debug',
            json: false,
            timestamp: true
        });
        this.handleExceptions(new winston.transports.Console({
            json: false,
            timestamp: true
        }));
        this.info("event=consoleLoggingEnabled");
    }
    if (_.isString(options.outLogFile)) {
        this.add(winston.transports.File, {
            level: level,
            filename: options.outLogFile,
            json: false,
            maxsize: 10485760,
            maxFiles: 10,
            timestamp: true
        });
        this.handleExceptions(new winston.transports.File({
            filename: options.outLogFile,
            json: false,
            timestamp: true,
            maxFiles: 10
        }));
        this.info("loggingTo=" + options.outLogFile);
    }
};

var logger = new ConfigurableLogger();

module.exports = logger;