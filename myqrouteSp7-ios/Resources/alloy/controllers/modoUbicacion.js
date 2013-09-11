function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __alloyId38 = [];
    __alloyId38.push("GPS");
    __alloyId38.push("Panel");
    __alloyId38.push("Cancelar");
    $.__views.modoDialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId38,
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
        0 == e.index ? gps.ubicar() : Ti.App.fireEvent("app:panelCero", {
            lon: str[0].lon,
            lat: str[0].lat,
            nombrePanel: str[0].name
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;