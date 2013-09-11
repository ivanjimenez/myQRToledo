function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabgroupInfo = Ti.UI.createTabGroup({
        id: "tabgroupInfo"
    });
    $.__views.mapa = Ti.UI.createWindow({
        id: "mapa",
        title: "Ruta Actual"
    });
    $.__views.basicSwitch = Ti.UI.createSwitch({
        id: "basicSwitch",
        value: "true",
        top: "20"
    });
    $.__views.mapa.add($.__views.basicSwitch);
    $.__views.__alloyId46 = Ti.UI.createWebView({
        url: "/localtile/local_tiles.html",
        id: "__alloyId46"
    });
    $.__views.mapa.add($.__views.__alloyId46);
    $.__views.Tab1 = Ti.UI.createTab({
        window: $.__views.mapa,
        id: "Tab1",
        title: "Mapa"
    });
    $.__views.tabgroupInfo.addTab($.__views.Tab1);
    $.__views.__alloyId51 = Ti.UI.createWindow({
        id: "__alloyId51"
    });
    $.__views.__alloyId52 = Alloy.createController("rutaseguida", {
        id: "__alloyId52",
        __parentSymbol: $.__views.__alloyId51
    });
    $.__views.__alloyId52.setParent($.__views.__alloyId51);
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.__alloyId51,
        id: "tab2",
        title: "Lista"
    });
    $.__views.tabgroupInfo.addTab($.__views.tab2);
    $.__views.tabgroupInfo && $.addTopLevelView($.__views.tabgroupInfo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.Geolocation.preferredProvider = "gps";
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    $.panel.addEventListener("click", function() {
        $.tabgroupInfo.close();
    });
    $.coor.addEventListener("click", function() {
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (e.error) {
                Ti.API.error("Error: " + e.error);
                alert("Error: " + e.error);
            } else {
                Ti.API.info(JSON.stringify(e.coords));
                Ti.App.fireEvent("app:fromTitanium", {
                    lon: e.coords.longitude,
                    lat: e.coords.latitude
                });
            }
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;