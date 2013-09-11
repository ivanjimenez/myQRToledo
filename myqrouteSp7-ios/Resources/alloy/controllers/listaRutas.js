function Controller() {
    function updateUi() {
        var models = __alloyId33.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId28 = models[i];
            __alloyId28.__transform = transformData(__alloyId28);
            var __alloyId29 = Ti.UI.createTableViewRow({
                height: "50dp",
                hasChild: "true",
                hasDetail: "true",
                leftImage: "undefined" != typeof __alloyId28.__transform["imageURL"] ? __alloyId28.__transform["imageURL"] : __alloyId28.get("imageURL")
            });
            rows.push(__alloyId29);
            var __alloyId30 = Ti.UI.createImageView({
                borderRadius: "10dp"
            });
            __alloyId29.add(__alloyId30);
            var __alloyId31 = Ti.UI.createLabel({
                font: {
                    fontSize: 12,
                    fontWeight: "bold"
                },
                color: "black",
                top: 0,
                left: 75,
                height: Ti.UI.SIZE,
                text: "undefined" != typeof __alloyId28.__transform["name"] ? __alloyId28.__transform["name"] : __alloyId28.get("name"),
                detail: "true"
            });
            __alloyId30.add(__alloyId31);
            var __alloyId32 = Ti.UI.createLabel({
                font: {
                    fontSize: 8,
                    fontWeight: "bold"
                },
                color: "black",
                top: 22,
                right: 5,
                height: Ti.UI.SIZE,
                text: "undefined" != typeof __alloyId28.__transform["longitud"] ? __alloyId28.__transform["longitud"] : __alloyId28.get("longitud")
            });
            __alloyId30.add(__alloyId32);
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
    $.__views.__alloyId27 = Ti.UI.createWindow({
        barImage: "/images/bar.png",
        id: "__alloyId27"
    });
    $.__views.table = Ti.UI.createTableView({
        width: "90%",
        height: "85%",
        top: 45,
        backgroundColor: "transparent",
        id: "table",
        headerTitle: "Rutas"
    });
    $.__views.__alloyId27.add($.__views.table);
    var __alloyId33 = Alloy.Collections["rutas"] || rutas;
    __alloyId33.on("fetch destroy change add remove reset", updateUi);
    var __alloyId36 = [];
    $.__views.returnMapa = Ti.UI.createButton({
        id: "returnMapa",
        right: "0",
        width: "40",
        height: "40",
        backgroundImage: "/images/041.png"
    });
    __alloyId36.push($.__views.returnMapa);
    $.__views.__alloyId34 = Ti.UI.iOS.createToolbar({
        items: __alloyId36,
        top: "0",
        borderTop: "true",
        borderBottom: "false",
        backgroundImage: "/images/barNoLogo.png",
        barColor: "transparent",
        id: "__alloyId34"
    });
    $.__views.__alloyId27.add($.__views.__alloyId34);
    $.__views.nav = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId27,
        id: "nav"
    });
    $.__views.listaRutas.add($.__views.nav);
    exports.destroy = function() {
        __alloyId33.off("fetch destroy change add remove reset", updateUi);
    };
    _.extend($, $.__views);
    Alloy.Collections.rutas;
    $.returnMapa.addEventListener("click", function() {
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