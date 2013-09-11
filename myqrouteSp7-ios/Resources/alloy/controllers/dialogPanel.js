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
    var __alloyId6 = [];
    __alloyId6.push("QR");
    __alloyId6.push("Cancel");
    __alloyId6.push("Help");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId6,
        id: "dialog",
        title: "panel",
        style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
        message: "¿Debe aproximarse a un panel",
        cancel: "1"
    });
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.dialog.addEventListener("click", function(e) {
        if (0 === e.index) {
            var Panel = JSON.parse(e.text);
            var panel = Alloy.Collections.paneles.at(Panel[0].id);
            var infoPanel = Alloy.createController("infoPanel", {
                index: Panel[0].id,
                STR: str,
                data: panel
            }).getView();
            infoPanel.open();
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;