function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __alloyId7 = [];
    __alloyId7.push("Leer Panel");
    __alloyId7.push("Cancel");
    __alloyId7.push("Help");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId7,
        id: "dialog",
        title: "Leer Panel",
        message: "¿Desee Leer el Panel?",
        cancel: "1"
    });
    $.__views.dialog && $.addTopLevelView($.__views.dialog);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.dialog.addEventListener("click", function(e) {
        0 == e.index && alert("Escanear");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;