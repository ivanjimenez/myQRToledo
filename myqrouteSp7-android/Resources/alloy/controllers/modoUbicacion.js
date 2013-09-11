function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __alloyId37 = [];
    __alloyId37.push("GPS");
    __alloyId37.push("Panel");
    __alloyId37.push("Cancelar");
    $.__views.modoDialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId37,
        id: "modoDialog",
        title: "Ubicación",
        message: "¿Cómo quieres ubicarte?",
        cancel: "2"
    });
    $.__views.modoDialog && $.addTopLevelView($.__views.modoDialog);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var gps = require("gps");
    require("readerQR");
    $.modoDialog.addEventListener("click", function(e) {
        0 == e.index && gps.ubicar();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;