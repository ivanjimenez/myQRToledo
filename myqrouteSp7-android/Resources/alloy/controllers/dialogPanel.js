function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.winDialog = Ti.UI.createWindow({
        id: "winDialog",
        fullscreen: "false"
    });
    $.__views.winDialog && $.addTopLevelView($.__views.winDialog);
    var __alloyId2 = [];
    __alloyId2.push("Escanear");
    __alloyId2.push("Cancel");
    __alloyId2.push("Help");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId2,
        id: "dialog",
        title: "panel",
        style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
        message: "¿Debe aproximarse a un panel",
        cancel: "1"
    });
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;