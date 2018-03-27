const configProvider = require('./configProvider');

const config = {
    "activeConfigFile": "test"
}

configProvider.loadTo(config);
module.exports = config;