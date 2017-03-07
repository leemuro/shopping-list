export default function filterObject(obj, testCallback) {
    return Object.keys(obj).filter(function(key, index, array) {
        return testCallback(obj[key], index, array)
    }).reduce(function(newObj, currentKey) {
        newObj[currentKey] = obj[currentKey]
        return newObj
    }, {});
}