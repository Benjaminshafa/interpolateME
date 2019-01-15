function interpolateME(defaultString, data) {
    delimiter = '{{}}';
    var regex = new RegExp("{{" + "[^" + "{{" + "}}" + "]+" + "}}", "g");
    var result = defaultString.replace(regex, function (placeholder) {
        let key = placeholder.replace(/[{}]/g, '');
        let val = data[key];
        return val;
    });
    return result;
}
module.exports = interpolateME