function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.mapa = Ti.UI.createWindow({
        id: "mapa"
    });
    $.__views.mapa && $.addTopLevelView($.__views.mapa);
    $.__views.__alloyId19 = Ti.UI.createView({
        top: "0",
        width: Ti.UI.FILL,
        height: "50",
        backgroundImage: "/images/bar.png",
        id: "__alloyId19"
    });
    $.__views.mapa.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        text: "Puerta del Sol",
        id: "__alloyId20"
    });
    $.__views.mapa.add($.__views.__alloyId20);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "/localtile/local_tiles.html",
        top: "50",
        borderWidth: "5",
        boderRadius: "4"
    });
    $.__views.mapa.add($.__views.webview);
    $.__views.toolbar = Ti.UI.createView({
        backgroundColor: "orange",
        height: 40,
        borderWidth: 2,
        boderRadius: 20,
        opacity: .5,
        backgroundGradient: {
            type: "radial",
            startPoint: {
                x: 50,
                y: 50
            },
            endPoint: {
                x: 50,
                y: 50
            },
            colors: [ "orange", "white" ],
            startRadius: "90%",
            endRadius: 0,
            backfillStart: true
        },
        id: "toolbar",
        bottom: "0"
    });
    $.__views.mapa.add($.__views.toolbar);
    $.__views.coor = Ti.UI.createButton({
        bottom: "0",
        id: "coor",
        left: "5",
        width: "40",
        height: "40",
        borderRadius: "10",
        borderWidth: "3",
        backgroundImage: "/images/001.png"
    });
    $.__views.toolbar.add($.__views.coor);
    $.__views.idioma = Ti.UI.createButton({
        bottom: "0",
        id: "idioma",
        backgroundImage: "/images/011.png",
        right: "160",
        width: "40",
        height: "40",
        borderRadius: "10",
        borderWidth: "3"
    });
    $.__views.toolbar.add($.__views.idioma);
    $.__views.Ruta = Ti.UI.createButton({
        bottom: "0",
        id: "Ruta",
        backgroundImage: "/images/032.png",
        right: "5",
        width: "40",
        height: "40",
        borderRadius: "10",
        borderWidth: "3"
    });
    $.__views.toolbar.add($.__views.Ruta);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    require("gps");
    require("readerQR");
    var str;
    var panelQR = require("panelQR");
    $.mapa.addEventListener("load", function() {
        if ("Comenzar" === args.args1) {
            var dialog = Ti.UI.createAlertDialog({
                title: "Comenzamos con el primer punto de la ruta",
                buttonNames: [ "OK" ]
            });
            dialog.show();
            str = JSON.parse(JSON.stringify(args.ruta));
            Ti.App.fireEvent("app:panelCero", {
                lon: str[0].lon,
                lat: str[0].lat,
                nombrePanel: str[0].name
            });
        }
    });
    Ti.App.addEventListener("app:leerPanel", function() {
        var inputText = Ti.UI.createTextField();
        var Panel, panel, infoPanel;
        var dialog = Ti.UI.createAlertDialog({
            title: "Escanear Panel",
            buttonNames: [ "QR", "Panel", "cancel" ]
        });
        dialog.addEventListener("click", function(e) {
            if (0 === e.index) {
                Panel = JSON.parse(inputText.value);
                panel = Alloy.Collections.paneles.at(Panel[0].id);
                infoPanel = Alloy.createController("infoPanel", {
                    index: Panel[0].id,
                    STR: str,
                    data: panel
                }).getView();
                infoPanel.open();
                alert(str.length);
            } else if (1 === e.index) {
                panelQR.escanear();
                var idRut = panelQR.qResult();
                panel = Alloy.Collections.paneles.at(idRut);
                alert("index: " + idRut + " " + "str: " + str.length + " " + " panel: " + panel);
                infoPanel = Alloy.createController("infoPanel", {
                    index: idRut,
                    STR: JSON.parse(JSON.stringify(args.ruta)),
                    data: panel
                }).getView();
                infoPanel.open();
            }
        });
        dialog.show();
    });
    $.idioma.addEventListener("click", function() {
        Alloy.createController("idioma").getView().show();
    });
    $.coor.addEventListener("click", function() {
        Alloy.createController("modoUbicacion").getView().show();
    });
    $.Ruta.addEventListener("click", function() {
        var v2 = Alloy.createController("listarutas").getView();
        v2.open();
    });
    $.mapa.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;