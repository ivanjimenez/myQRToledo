
var gps = require('gps');
var readerQR = require('readerQR');

$.modoDialog.addEventListener('click', function(e){
	
    //ubicación por GPS
	if (e.index == 0){
	gps.ubicar();
	}

	//ubicación por Panel
	else {
		Ti.App.fireEvent('app:panelCero', 
                      { lon: str[0].lon,
                        lat: str[0].lat,
                        nombrePanel: str[0].name
                        
                      });
	}
});