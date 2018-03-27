var base = require("./baseConfig");
const helper = require("../util/objectHelper");

const configFileName = "./config.{name}.json";

//Load config to given object.
exports.loadTo = function (config) {
    var configName = config.activeConfigFile ? config.activeConfigFile : "test";
    configName = configFileName.replace("{name}", configName);

    var item = require(configName);
    helper.cloneSourceFields(new base(), config);
    helper.patchTargetFields(item, config);
    config.configName = configName;
};