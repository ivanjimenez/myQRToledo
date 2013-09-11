var Barcode = require("ti.barcode");

var scanResult = "";

exports.escanear = function() {
    var overlay = Ti.UI.createView({
        backgroundColor: "transparent",
        width: 150,
        height: 60,
        top: 20
    });
    Barcode.allowRotation = true;
    Barcode.displayedMessage = "SITÚESE EN EL PANEL ";
    Barcode.allowMenu = true;
    Barcode.allowInstructions = true;
    Barcode.useLED = true;
    Barcode.useFrontCamera = true;
    Barcode.capture({
        animate: true,
        overlay: overlay,
        showCancel: false,
        showRectangle: false,
        keepOpen: true
    });
    Barcode.addEventListener("success", function(e) {
        scanResult = e.result;
        Barcode.cancel();
    });
    Barcode.addEventListener("cancel", function() {
        Barcode.cancel();
    });
    Barcode.addEventListener("error", function() {
        alert("Error al leer Panel");
        Barcode.cancel();
    });
};

exports.qResult = function() {
    return scanResult;
};