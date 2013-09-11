exports.ubicar = function() {
    Ti.Geolocation.purpose = "Tracking offline Rutas Toledo";
    Ti.Geolocation.preferredProvider = "gps";
    Titanium.Geolocation.distanceFilter = 10;
    Ti.Geolocation.locationServicesEnabled && (Ti.Geolocation.accuracy = "android" === Ti.Platform.osname ? Ti.Geolocation.ACCURACY_HIGH : Ti.Geolocation.ACCURACY_BEST);
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) Ti.UI.createAlertDialog({
            title: "Error",
            message: "Noy hay GPS" + e.error
        }).show(); else {
            Ti.API.info(JSON.stringify(e.coords));
            Ti.App.fireEvent("app:fromTitanium", {
                lon: e.coords.longitude,
                lat: e.coords.latitude
            });
        }
    });
};