function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __alloyId14 = [];
    __alloyId14.push("Español");
    __alloyId14.push("English");
    __alloyId14.push("cancel");
    $.__views.idioma = Ti.UI.createOptionDialog({
        options: __alloyId14,
        id: "idioma",
        title: "Selección de Idioma",
        destructive: "3",
        cancel: "2"
    });
    $.__views.idioma && $.addTopLevelView($.__views.idioma);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;