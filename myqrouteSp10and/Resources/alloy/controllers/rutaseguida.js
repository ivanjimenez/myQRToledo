function Controller() {
    function __alloyId59() {
        var models = __alloyId58.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId55 = models[i];
            __alloyId55.__transform = {};
            var __alloyId56 = Ti.UI.createTableViewRow({
                height: "50dp"
            });
            rows.push(__alloyId56);
            var __alloyId57 = Ti.UI.createLabel({
                font: {
                    fontSize: 12,
                    fontWeight: "bold"
                },
                color: "black",
                top: 0,
                left: 75,
                height: Ti.UI.SIZE,
                text: "undefined" != typeof __alloyId55.__transform["name"] ? __alloyId55.__transform["name"] : __alloyId55.get("name")
            });
            __alloyId56.add(__alloyId57);
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
        backgroundColor: "transparent",
        backgroundImage: "/images/gradientBackground.png",
        id: "window",
        title: "Lista de Puntos"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.table = Ti.UI.createTableView({
        width: "90%",
        height: "85%",
        top: 45,
        backgroundColor: "transparent",
        id: "table"
    });
    $.__views.window.add($.__views.table);
    var __alloyId58 = Alloy.Collections["rutas"] || rutas;
    __alloyId58.on("fetch destroy change add remove reset", __alloyId59);
    exports.destroy = function() {
        __alloyId58.off("fetch destroy change add remove reset", __alloyId59);
    };
    _.extend($, $.__views);
    Alloy.Collections.paneles;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;