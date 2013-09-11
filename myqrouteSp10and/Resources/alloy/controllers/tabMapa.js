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