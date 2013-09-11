function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.winPanel = Ti.UI.createWindow({
        backgroundImage: "/images/gradientBackground.png",
        id: "winPanel",
        modal: "false",
        barImage: "/images/bar.png"
    });
    $.__views.winPanel && $.addTopLevelView($.__views.winPanel);
    $.__views.scan = Ti.UI.createButton({
        top: "250",
        height: 100,
        backgroundColor: "#abd",
        title: "Scan",
        id: "scan"
    });
    $.__views.winPanel.add($.__views.scan);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        text: "Longitud",
        left: "0px",
        top: "100",
        id: "__alloyId10"
    });
    $.__views.winPanel.add($.__views.__alloyId10);
    $.__views.txtLon = Ti.UI.createTextArea({
        id: "txtLon",
        top: "100",
        width: "150",
        right: "50px"
    });
    $.__views.winPanel.add($.__views.txtLon);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        text: "Latitud",
        left: "0px",
        top: "150",
        id: "__alloyId11"
    });
    $.__views.winPanel.add($.__views.__alloyId11);
    $.__views.txtLat = Ti.UI.createTextArea({
        id: "txtLat",
        top: "150",
        width: "150",
        right: "50px"
    });
    $.__views.winPanel.add($.__views.txtLat);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        text: "Modelo",
        left: "0px",
        top: "0",
        id: "__alloyId12"
    });
    $.__views.winPanel.add($.__views.__alloyId12);
    $.__views.txtModelo = Ti.UI.createTextArea({
        top: 0,
        width: 250,
        right: "0px",
        font: {
            fontSize: 20,
            fontWeight: "bold"
        },
        id: "txtModelo"
    });
    $.__views.winPanel.add($.__views.txtModelo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.scan.addEventListener("click", function() {
        var Panel = JSON.parse($.txtModelo.value);
        var panel = Alloy.Collections.paneles.at(Panel[0].id);
        var infoPanel = Alloy.createController("infoPanel", {
            data: panel
        }).getView();
        infoPanel.open();
    });
    $.winPanel.addEventListener("swipe", function() {
        $.winPanel.close({
            transition: Titanium.UI.iPhone.AnimationStyle.CURL_UP
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;