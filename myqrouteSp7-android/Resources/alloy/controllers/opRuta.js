function Controller() {
    function showDialog() {
        $.dialog.show();
    }
    function doClick(e) {
        Ti.API.info("e.text: " + e.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win = Ti.UI.createWindow({
        id: "win",
        title: "Click window to test",
        backgroundColor: "white",
        exitOnClose: "true",
        fullscreen: "false"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    showDialog ? $.__views.win.addEventListener("click", showDialog) : __defers["$.__views.win!click!showDialog"] = true;
    var __alloyId42 = [];
    __alloyId42.push("Confirm");
    __alloyId42.push("Cancel");
    __alloyId42.push("Help");
    $.__views.dialog = Ti.UI.createAlertDialog({
        buttonNames: __alloyId42,
        id: "dialog",
        title: "Delete",
        message: "Would you like to delete the file?",
        cancel: "1"
    });
    doClick ? $.__views.dialog.addEventListener("click", doClick) : __defers["$.__views.dialog!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.win!click!showDialog"] && $.__views.win.addEventListener("click", showDialog);
    __defers["$.__views.dialog!click!doClick"] && $.__views.dialog.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;