function Controller() {
    function updateUi() {
        var models = __alloyId34.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId30 = models[i];
            __alloyId30.__transform = transformData(__alloyId30);
            var __alloyId31 = Ti.UI.createTableViewRow({
                height: "50dp",
                hasChild: "true",
                hasDetail: "true",
                leftImage: "undefined" != typeof __alloyId30.__transform["imageURL"] ? __alloyId30.__transform["imageURL"] : __alloyId30.get("imageURL")
            });
            rows.push(__alloyId31);
            var __alloyId32 = Ti.UI.createLabel({
                font: {
                    fontSize: 42,
                    fontWeight: "bold"
                },
                color: "black",
                top: 0,
                right: 0,
                text: "undefined" != typeof __alloyId30.__transform["upperCaseName"] ? __alloyId30.__transform["upperCaseName"] : __alloyId30.get("upperCaseName"),
                detail: "true"
            });
            __alloyId31.add(__alloyId32);
            var __alloyId33 = Ti.UI.createLabel({
                font: {
                    fontSize: 12,
                    fontWeight: "bold"
                },
                color: "black",
                top: 60,
                right: 0,
                text: "undefined" != typeof __alloyId30.__transform["longitud"] ? __alloyId30.__transform["longitud"] : __alloyId30.get("longitud")
            });
            __alloyId31.add(__alloyId33);
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
    $.__views.table = Ti.UI.createTableView({
        width: "90%",
        height: "85%",
        top: 45,
        backgroundColor: "transparent",
        id: "table",
        headerTitle: "Rutas"
    });
    $.__views.listaRutas.add($.__views.table);
    var __alloyId34 = Alloy.Collections["rutas"] || rutas;
    __alloyId34.on("fetch destroy change add remove reset", updateUi);
    $.__views.__alloyId35 = Ti.UI.createView({
        top: "0",
        backgroundImage: "/images/bar.png",
        height: "50",
        id: "__alloyId35"
    });
    $.__views.listaRutas.add($.__views.__alloyId35);
    $.__views.Mapa = Ti.UI.createButton({
        id: "Mapa",
        title: "Mapa",
        top: "0",
        right: "0",
        width: "100",
        height: "50",
        borderRadius: "10",
        backgroundImage: "/images/barNoLogo.png",
        borderWidth: "3"
    });
    $.__views.listaRutas.add($.__views.Mapa);
    exports.destroy = function() {
        __alloyId34.off("fetch destroy change add remove reset", updateUi);
    };
    _.extend($, $.__views);
    Alloy.Collections.rutas;
    $.Mapa.addEventListener("click", function() {
        $.listaRutas.close();
    });
    updateUi();
    $.table.addEventListener("click", function(e) {
        var nombreRuta = Alloy.Collections.rutas.at(e.index);
        var detalleRuta = Alloy.createController("DetalleRuta", {
            index: e.index,
            data: nombreRuta
        }).getView();
        detalleRuta.open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;