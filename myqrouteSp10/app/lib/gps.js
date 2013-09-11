//Geolocalización mediante GPS con aproximación mejor y filtro de 10 metros

exports.ubicar = function (){

Ti.Geolocation.purpose = 'Tracking offline Rutas Toledo';
Ti.Geolocation.preferredProvider = "gps";
Titanium.Geolocation.distanceFilter = 10;


//Geolocalización igual para todos los sistemas, a excecpción de Android.

if (Ti.Geolocation.locationServicesEnabled) {
  if (Ti.Platform.osname === 'android') {
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_HIGH;
  }
  else {
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;

  }
}


Titanium.Geolocation.getCurrentPosition(function(e) {

 if (e.error) {
            Ti.UI.createAlertDialog({
            title : "Error",
            message : "Noy hay GPS" + e.error
            }).show();
            

        } else {
              

              Ti.API.info(JSON.stringify(e.coords));
              //alert(JSON.stringify(e.coords));
               Ti.App.fireEvent('app:fromTitanium', 
              { lon: e.coords.longitude, //39.859678,
                lat: e.coords.latitude//-4.025159
                
              });
                       
        }
  });
}

