

var gps = require('gps');
var readerQR = require('readerQR');


$.panel.addEventListener('click',function(e){

   Alloy.createController('alertdialog').getView().show();

});



$.coor.addEventListener('click',function(){


	Titanium.Geolocation.getCurrentPosition(function(e) {

		gps.ubicar();
	});     
    
});

$.Ruta.addEventListener('click',function(e){

    var v2 = Alloy.createController('listarutas').getView();
    v2.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});

});

