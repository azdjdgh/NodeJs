function baseConfig() {
    
};

baseConfig.prototype.isTestEnvironment = true;

baseConfig.prototype.currentConfig = "test";

baseConfig.prototype.serverPort = 12000;
baseConfig.prototype.urlPrefix = "/wiseclass/course"

module.exports = baseConfig;