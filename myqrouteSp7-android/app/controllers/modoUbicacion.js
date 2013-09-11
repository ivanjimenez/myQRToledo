
var gps = require('gps');
var readerQR = require('readerQR');

$.modoDialog.addEventListener('click', function(e){
	if (e.index == 0){
	gps.ubicar();
}

});