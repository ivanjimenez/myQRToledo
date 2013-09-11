function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId60 = Ti.UI.createWindow({
        id: "__alloyId60"
    });
    $.__views.__alloyId61 = Alloy.createController("rutaseguida", {
        id: "__alloyId61",
        __parentSymbol: $.__views.__alloyId60
    });
    $.__views.__alloyId61.setParent($.__views.__alloyId60);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.__alloyId60,
        id: "tab2",
        title: "Lista"
    });
    $.__views.tab2 && $.addTopLevelView($.__views.tab2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;