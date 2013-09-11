function Controller() {
    function updateUi() {
        var models = __alloyId37.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId32 = models[i];
            __alloyId32.__transform = transformData(__alloyId32);
            var __alloyId33 = Ti.UI.createTableViewRow({
                height: "50dp",
                hasChild: "true",
                hasDetail: "true",
                leftImage: "undefined" != typeof __alloyId32.__transform["imageURL"] ? __alloyId32.__transform["imageURL"] : __alloyId32.get("imageURL")
            });
            rows.push(__alloyId33);
            var __alloyId34 = Ti.UI.createImageView({
                borderRadius: "10dp"
            });
            __alloyId33.add(__alloyId34);
            var __alloyId35 = Ti.UI.createLabel({
                font: {
                    fontSize: 12,
                    fontWeight: "bold"
                },
                color: "black",
                top: 0,
                left: 75,
                height: Ti.UI.SIZE,
                text: "undefined" != typeof __alloyId32.__transform["upperCaseName"] ? __alloyId32.__transform["upperCaseName"] : __alloyId32.get("upperCaseName"),
                detail: "true"
            });
            __alloyId34.add(__alloyId35);
            var __alloyId36 = Ti.UI.createLabel({
                font: {
                    fontSize: 8,
                    fontWeight: "bold"
                },
                color: "black",
                top: 22,
                right: 5,
                height: Ti.UI.SIZE,
                text: "undefined" != typeof __alloyId32.__transform["longitud"] ? __alloyId32.__transform["longitud"] : __alloyId32.get("longitud")
            });
            __alloyId34.add(__alloyId36);
        }
        $.__views.table.setData(rows);
    }
    function transformData(model) {
        var attrs = model.toJSON();
        attrs.upperCaseName = attrs.name.toUpperCase();
        return attrs;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.listaRutas = Ti.UI.createWindow({
        backgroundColor: "#abc",
        backgroundImage: "/images/gradientBackground.png",
        id: "listaRutas",
        barImage: "/images/bar.png"
    });
    $.__views.listaRutas && $.addTopLevelView($.__views.listaRutas);
    $.__views.__alloyId31 = Ti.UI.createWindow({
        barImage: "/images/bar.png",
        id: "__alloyId31"
    });
    $.__views.table = Ti.UI.createTableView({
        width: "90%",
        height: "85%",
        top: 45,
        backgroundColor: "transparent",
        id: "table",
        headerTitle: "Rutas"
    });
    $.__views.__alloyId31.add($.__views.table);
    var __alloyId37 = Alloy.Collections["rutas"] || rutas;
    __alloyId37.on("fetch destroy change add remove reset", updateUi);
    var __alloyId40 = [];
    $.__views.Mapa = Ti.UI.createButton({
        id: "Mapa",
        right: "0",
        width: "40",
        height: "40",
        backgroundImage: "/images/041.png"
    });
    __alloyId40.push($.__views.Mapa);
    $.__views.__alloyId38 = Ti.UI.iOS.createToolbar({
        items: __alloyId40,
        top: "0",
        borderTop: "true",
        borderBottom: "false",
        backgroundImage: "/images/barNoLogo.png",
        barColor: "transparent",
        id: "__alloyId38"
    });
    $.__views.__alloyId31.add($.__views.__alloyId38);
    $.__views.nav = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId31,
        id: "nav"
    });
    $.__views.listaRutas.add($.__views.nav);
    exports.destroy = function() {
        __alloyId37.off("fetch destroy change add remove reset", updateUi);
    };
    _.extend($, $.__views);
    Alloy.Collections.rutas;
    $.Mapa.addEventListener("click", function() {
        $.listaRutas.close({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
    });
    updateUi();
    $.table.addEventListener("click", function(e) {
        var nombreRuta = Alloy.Collections.rutas.at(e.index);
        var detalleRuta = Alloy.createController("detalleRuta", {
            index: e.index,
            data: nombreRuta
        });
        $.nav.open(detalleRuta.getView(), {
            animated: true
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;