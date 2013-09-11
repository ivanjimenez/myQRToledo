exports.ubicar = function() {
    Ti.Geolocation.preferredProvider = Ti.Geolocation.PROVIDER_GPS;
    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    Titanium.Geolocation.addEventListener("location", function(e) {
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
};