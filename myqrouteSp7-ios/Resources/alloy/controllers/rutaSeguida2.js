function Controller() {
    function __alloyId52() {
        var models = __alloyId51.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId48 = models[i];
            __alloyId48.__transform = {};
            var __alloyId49 = Ti.UI.createTableViewRow({});
            rows.push(__alloyId49);
            var __alloyId50 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId48.__transform["name"] ? __alloyId48.__transform["name"] : __alloyId48.get("name")
            });
            __alloyId49.add(__alloyId50);
        }
        $.__views.table.setData(rows);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("paneles");
    $.__views.window = Ti.UI.createWindow({
        id: "window",
        title: "Lista de Puntos"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.window.add($.__views.table);
    var __alloyId51 = Alloy.Collections["rutas"] || rutas;
    __alloyId51.on("fetch destroy change add remove reset", __alloyId52);
    exports.destroy = function() {
        __alloyId51.off("fetch destroy change add remove reset", __alloyId52);
    };
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;