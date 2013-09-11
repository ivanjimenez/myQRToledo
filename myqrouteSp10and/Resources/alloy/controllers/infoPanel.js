function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.panelModel = Alloy.createModel("rutas");
    $.__views.vidWin = Ti.UI.createWindow({
        id: "vidWin",
        barImage: "/images/bar.png"
    });
    $.__views.vidWin && $.addTopLevelView($.__views.vidWin);
    $.__views.videoPlayer = Ti.Media.createVideoPlayer({
        id: "videoPlayer",
        ns: Ti.Media,
        top: "0",
        height: "500",
        width: Ti.UI.FILL,
        autoplay: "true",
        accessibilityValue: "Puerta del Sol"
    });
    $.__views.vidWin.add($.__views.videoPlayer);
    $.__views.txtPanel = Ti.UI.createWebView({
        id: "txtPanel",
        borderWidth: "2",
        borderColor: "#bbb",
        borderRadius: "5",
        color: "#888",
        textAlign: "left",
        top: "500",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    $.__views.vidWin.add($.__views.txtPanel);
    $.__views.__alloyId21 = Ti.UI.createView({
        bottom: "0",
        height: "50",
        backgroundImage: "/images/barNoLogo.png",
        id: "__alloyId21"
    });
    $.__views.vidWin.add($.__views.__alloyId21);
    $.__views.cancel = Ti.UI.createButton({
        id: "cancel",
        left: "0",
        height: "50",
        width: "100",
        title: "Cancelar",
        borderRadius: "10",
        borderWidth: "4"
    });
    $.__views.__alloyId21.add($.__views.cancel);
    $.__views.camera = Ti.UI.createButton({
        id: "camera",
        left: "100",
        height: "50",
        width: "100",
        title: "Cámara",
        borderRadius: "10",
        borderWidth: "4"
    });
    $.__views.__alloyId21.add($.__views.camera);
    $.__views.siguiente = Ti.UI.createButton({
        id: "siguiente",
        left: "200",
        height: "50",
        width: "100",
        title: "Siguiente",
        borderRadius: "10",
        borderWidth: "4"
    });
    $.__views.__alloyId21.add($.__views.siguiente);
    var __alloyId22 = function() {
        $.videoPlayer.url = _.isFunction($.panelModel.transform) ? $.panelModel.transform()["video"] : $.panelModel.get("video");
        $.txtPanel.url = _.isFunction($.panelModel.transform) ? $.panelModel.transform()["legend"] : $.panelModel.get("legend");
    };
    $.panelModel.on("fetch change destroy", __alloyId22);
    exports.destroy = function() {
        $.panelModel.off("fetch change destroy", __alloyId22);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.panelModel.set(args.data);
    var str = args.STR;
    var num = parseInt(args.index);
    args.data;
    $.siguiente.addEventListener("click", function() {
        num += 1;
        if (num - 1 == str[str.length - 1].id) {
            Ti.UI.createAlertDialog({
                title: "Fin de Ruta",
                message: "Debe seleccionar otra ruta"
            }).show();
            $.vidWin.close();
        } else {
            Ti.App.fireEvent("app:panelCero", {
                lon: str[num].lon,
                lat: str[num].lat,
                nombrePanel: str[num].name
            });
            $.vidWin.close();
        }
    });
    $.vidWin.addEventListener("close", function() {
        $.destroy();
    });
    $.cancel.addEventListener("click", function() {
        $.vidWin.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;