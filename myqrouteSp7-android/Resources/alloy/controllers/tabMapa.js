function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.mapa = Ti.UI.createWindow({
        id: "mapa",
        title: "myQRoute"
    });
    $.__views.basicSwitch = Ti.UI.createSwitch({
        id: "basicSwitch",
        value: "true",
        top: "20"
    });
    $.__views.mapa.add($.__views.basicSwitch);
    $.__views.__alloyId62 = Ti.UI.createWebView({
        url: "/localtile/local_tiles.html",
        id: "__alloyId62"
    });
    $.__views.mapa.add($.__views.__alloyId62);
    var __alloyId65 = [];
    $.__views.coor = Ti.UI.createButton({
        id: "coor",
        title: "Ubícame",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });
    __alloyId65.push($.__views.coor);
    $.__views.__alloyId66 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId65.push($.__views.__alloyId66);
    $.__views.panel = Ti.UI.createButton({
        id: "panel",
        title: "Panel",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });
    __alloyId65.push($.__views.panel);
    $.__views.__alloyId67 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId65.push($.__views.__alloyId67);
    $.__views.Ruta = Ti.UI.createButton({
        id: "Ruta",
        title: "Ruta",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });
    __alloyId65.push($.__views.Ruta);
    $.__views.__alloyId63 = Ti.UI.iOS.createToolbar({
        items: __alloyId65,
        bottom: "0",
        borderTop: "true",
        borderBottom: "false",
        id: "__alloyId63"
    });
    $.__views.mapa.add($.__views.__alloyId63);
    $.__views.Tab1 = Ti.UI.createTab({
        window: $.__views.mapa,
        id: "Tab1",
        title: "Mapa"
    });
    $.__views.Tab1 && $.addTopLevelView($.__views.Tab1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var gps = require("gps");
    require("readerQR");
    $.panel.addEventListener("click", function() {
        Alloy.createController("alertdialog").getView().show();
    });
    $.coor.addEventListener("click", function() {
        Titanium.Geolocation.getCurrentPosition(function() {
            gps.ubicar();
        });
    });
    $.Ruta.addEventListener("click", function() {
        var v2 = Alloy.createController("listarutas").getView();
        v2.open({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;