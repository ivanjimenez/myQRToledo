

Ti.Geolocation.preferredProvider = "gps";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 10;

$.panel.addEventListener('click',function(e){

    $.tabgroupInfo.close();

});



$.coor.addEventListener('click',function(){

 

  
    Titanium.Geolocation.getCurrentPosition(function(e) {
        if (e.error) {
            Ti.API.error('Error: ' + e.error);
            alert('Error: ' + e.error);

        } else {
              

              Ti.API.info(JSON.stringify(e.coords));
              //alert(JSON.stringify(e.coords));
               Ti.App.fireEvent('app:fromTitanium', 
              { lon: e.coords.longitude, //39.859678,
                lat: e.coords.latitude//-4.025159
                
              });
                     
        }

  });

});
