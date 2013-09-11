function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2",
        title: "Toledo Monumental",
        backgroundColor: "red"
    });
    $.__views.win2 && $.addTopLevelView($.__views.win2);
    $.__views.__alloyId23 = Ti.UI.createTableViewRow({
        title: "Bisagra",
        id: "__alloyId23"
    });
    var __alloyId24 = [];
    __alloyId24.push($.__views.__alloyId23);
    $.__views.__alloyId25 = Ti.UI.createTableViewRow({
        title: "Plaza de Zocodover",
        id: "__alloyId25"
    });
    __alloyId24.push($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createTableViewRow({
        title: "El Alcázar",
        id: "__alloyId26"
    });
    __alloyId24.push($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createTableViewRow({
        title: "Tornerías",
        id: "__alloyId27"
    });
    __alloyId24.push($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        title: "Teatro de Rojas",
        id: "__alloyId28"
    });
    __alloyId24.push($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        title: "Cristo de la Luz",
        id: "__alloyId29"
    });
    __alloyId24.push($.__views.__alloyId29);
    $.__views.table2 = Ti.UI.createTableView({
        data: __alloyId24,
        id: "table2"
    });
    $.__views.win2.add($.__views.table2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.table2.addEventListener("click", function() {
        var v1 = Alloy.createController("index").getView();
        v1.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;