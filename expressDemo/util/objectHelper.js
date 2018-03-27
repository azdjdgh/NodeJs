//Update target's properties by source's property, we only update the existing property in target.
exports.patchTargetFields = function (source, target) {
    if (!source || !target) {
        return;
    }
    patchFilesFromSource(source, target);
};

exports.cloneSourceFields = function (source, target) {
    if (!source || !target) {
        return;
    }
    cloneFieldsFromSource(source, target);
};

//Create a new object in target fields, and then update values from source, a same source object is created when target is null.
exports.cloneTarget = function (source, target) {
    if (!source) {
        return null;
    }

    if (target) {
        var result = {};
        cloneFieldsFromSource(target, result);
        patchFilesFromSource(source, result);
        return result;
    }
    else {
        return Object.create(source);
    }
};

exports.getValuedFields = function (data, fields) {
    if (!data || !fields) {
        return {};
    }

    var result = {};

    for (var field in data) {
        if (fields.hasOwnProperty(field) || fields.__proto__.hasOwnProperty(field)) {
            result[field] = data[field];
        }
    }
    return result;
};

function cloneFieldsFromSource(source, target) {
    for (var field in source) {
        target[field] = source[field];
    }

    for (var filed in source.__proto__) {
        target[field] = source[field];
    }
}

function patchFilesFromSource(source, target) {
    for (var field in source) {
        if (target.hasOwnProperty(field) || target.__proto__.hasOwnProperty(field)) {
            target[field] = source[field];
        }
    }
}