("iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname) && (Titanium.UI.iPhone.statusBarHidden = true);

var picker;

var window = Titanium.UI.createWindow({
    title: "Scandit SDK",
    navBarHidden: true
});

exports.openScanner = function() {
    picker = scanditsdk.createView({
        width: "100%",
        height: "100%"
    });
    picker.init("enter Scandit SDK APP KEY here", 0);
    picker.showSearchBar(true);
    picker.showToolBar(true);
    picker.setSuccessCallback(function(e) {
        alert("success (" + e.symbology + "): " + e.barcode);
    });
    picker.setCancelCallback(function() {
        closeScanner();
    });
    window.add(picker);
    window.addEventListener("open", function() {
        "iphone" == Ti.Platform.osname || "ipad" == Ti.Platform.osname ? picker.setOrientation(Ti.UI.orientation) : picker.setOrientation(window.orientation);
        picker.setSize(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight);
        picker.startScanning();
    });
    window.open();
};

exports.closeScanner = function() {
    if (null != picker) {
        picker.stopScanning();
        window.remove(picker);
    }
    window.close();
};

Ti.Gesture.addEventListener("orientationchange", function(e) {
    window.orientationModes = [ Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT ];
    if (null != picker) {
        picker.setOrientation(e.orientation);
        picker.setSize(Ti.Platform.displayCaps.platformWidth, Ti.Platform.displayCaps.platformHeight);
    }
});

exports.leerPanel = function() {}, exports.readLon = function() {}, exports.readLat = function() {};