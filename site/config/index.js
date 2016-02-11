'use strict';

var config;
var node_env = process.env.NODE_ENV || 'development';

if (node_env === 'development') {
    config = require('./environment/development');
} else if (node_env === 'production') {
    config = require('./environment/production');
} else if (node_env === 'test') {
    config = require('./environment/test');
}

module.exports = config;