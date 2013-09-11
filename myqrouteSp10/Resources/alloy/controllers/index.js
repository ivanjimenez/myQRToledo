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
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "/localtile/local_tiles.html",
        top: "50",
        borderWidth: "5",
        boderRadius: "4"
    });
    $.__views.mapa.add($.__views.webview);
    var __alloyId22 = [];
    $.__views.coor = Ti.UI.createButton({
        id: "coor",
        width: "40",
        height: "40",
        backgroundImage: "/images/001.png"
    });
    __alloyId22.push($.__views.coor);
    $.__views.__alloyId23 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId22.push($.__views.__alloyId23);
    $.__views.idioma = Ti.UI.createButton({
        id: "idioma",
        width: "40",
        height: "40",
        backgroundImage: "/images/011.png"
    });
    __alloyId22.push($.__views.idioma);
    $.__views.__alloyId24 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId22.push($.__views.__alloyId24);
    $.__views.Ruta = Ti.UI.createButton({
        id: "Ruta",
        width: "40",
        height: "40",
        backgroundImage: "/images/032.png"
    });
    __alloyId22.push($.__views.Ruta);
    $.__views.__alloyId20 = Ti.UI.iOS.createToolbar({
        items: __alloyId22,
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        barColor: "transparent",
        backgroundImage: "/images/barNoLogo.png",
        id: "__alloyId20"
    });
    $.__views.mapa.add($.__views.__alloyId20);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    require("gps");
    require("readerQR");
    var str;
    $.mapa.addEventListener("load", function() {
        if ("Comenzar" === args.args1) {
            var dialog = Ti.UI.createAlertDialog({
                title: "Comenzamos con el primer punto de la ruta",
                style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
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
    var dialog = Ti.UI.createAlertDialog({
        title: "Escanear Panel",
        style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
        buttonNames: [ "QR", "cancel" ]
    });
    var test = function(e) {
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
    };
    dialog.addEventListener("click", test);
    var leerPanel = function() {
        dialog.show();
    };
    Ti.App.addEventListener("app:leerPanel", leerPanel);
    $.idioma.addEventListener("click", function() {
        Alloy.createController("idioma").getView().show();
    });
    $.coor.addEventListener("click", function() {
        Alloy.createController("modoUbicacion").getView().show();
    });
    $.Ruta.addEventListener("click", function() {
        var v2 = Alloy.createController("listaRutas").getView();
        v2.open({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
    });
    $.mapa.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;