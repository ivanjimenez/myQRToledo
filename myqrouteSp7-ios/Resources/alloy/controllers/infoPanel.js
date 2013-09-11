function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.panelModel = Alloy.createModel("rutas");
    $.__views.winPanel = Ti.UI.createWindow({
        id: "winPanel",
        barImage: "/images/bar.png"
    });
    $.__views.winPanel && $.addTopLevelView($.__views.winPanel);
    $.__views.videoPlayer = Ti.Media.createVideoPlayer({
        id: "videoPlayer",
        ns: Ti.Media,
        top: "0",
        height: "200",
        width: Ti.UI.FILL,
        autoplay: "false",
        accessibilityValue: "Puerta del Sol"
    });
    $.__views.winPanel.add($.__views.videoPlayer);
    $.__views.txtPanel = Ti.UI.createWebView({
        id: "txtPanel",
        borderWidth: "2",
        borderColor: "#bbb",
        borderRadius: "5",
        color: "#888",
        textAlign: "left",
        top: "200",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL
    });
    $.__views.winPanel.add($.__views.txtPanel);
    var __alloyId23 = [];
    $.__views.cancel = Ti.UI.createButton({
        id: "cancel",
        systemButton: Ti.UI.iPhone.SystemButton.CANCEL
    });
    __alloyId23.push($.__views.cancel);
    $.__views.__alloyId24 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId23.push($.__views.__alloyId24);
    $.__views.camera = Ti.UI.createButton({
        id: "camera",
        systemButton: Ti.UI.iPhone.SystemButton.CAMERA
    });
    __alloyId23.push($.__views.camera);
    $.__views.__alloyId25 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId23.push($.__views.__alloyId25);
    $.__views.siguiente = Ti.UI.createButton({
        id: "siguiente",
        title: "Siguiente",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE
    });
    __alloyId23.push($.__views.siguiente);
    $.__views.toolbarPanel = Ti.UI.iOS.createToolbar({
        items: __alloyId23,
        id: "toolbarPanel",
        bottom: "0",
        barColor: "transparent"
    });
    $.__views.winPanel.add($.__views.toolbarPanel);
    var __alloyId26 = function() {
        $.videoPlayer.url = _.isFunction($.panelModel.transform) ? $.panelModel.transform()["video"] : $.panelModel.get("video");
        $.txtPanel.url = _.isFunction($.panelModel.transform) ? $.panelModel.transform()["legend"] : $.panelModel.get("legend");
    };
    $.panelModel.on("fetch change destroy", __alloyId26);
    exports.destroy = function() {
        $.panelModel.off("fetch change destroy", __alloyId26);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.panelModel.set(args.data);
    var str = args.STR;
    var num = args.index;
    $.cancel.addEventListener("click", function() {
        $.winPanel.close();
    });
    $.siguiente.addEventListener("click", function() {
        if (num > str.length) {
            Ti.UI.createAlertDialog({
                title: "Fin de Ruta",
                message: "Debe seleccionar otra ruta"
            }).show();
            $.winPanel.close();
        } else {
            num += 1;
            Ti.App.fireEvent("app:panelCero", {
                lon: str[num].lon,
                lat: str[num].lat,
                nombrePanel: str[num].name
            });
            if (str.length === num + 1) {
                Ti.UI.createAlertDialog({
                    title: "Fin de Ruta",
                    message: "Debe seleccionar otra ruta"
                }).show();
                $.winPanel.close();
            } else {
                alert("Siguiente Punto de la Ruta");
                $.winPanel.close();
            }
        }
    });
    $.camera.addEventListener("click", function() {
        var cameraOptions = {
            success: function(event) {
                var image = event.media;
                var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, "photo" + args.data.get("id") + ".png");
                f.write(image);
            },
            cancel: function() {},
            error: function(error) {
                var a = Ti.UI.createAlertDialog({
                    title: "Error: No hay cámara"
                });
                error.code == Ti.Media.NO_CAMERA ? a.setMessage("NO HAY CÁMARA") : a.setMessage("Error inesperado: " + error.code);
                a.show();
            },
            saveToPhotoGallery: true,
            allowEditing: true,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        };
        Ti.Media.isCameraSupported ? Ti.Media.showCamera(cameraOptions) : Ti.Media.openPhotoGallery(cameraOptions);
    });
    $.winPanel.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;