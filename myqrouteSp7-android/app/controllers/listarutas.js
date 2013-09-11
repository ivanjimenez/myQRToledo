var locations = Alloy.Collections.rutas;


$.Mapa.addEventListener('click', function (e){

	$.listaRutas.close();

});

function transformData(model) {
	var attrs = model.toJSON();

	//attrs.longitud = attrs.longitud.toLowerCase();
	attrs.upperCaseName = attrs.name.toUpperCase();
	return attrs;
}


updateUi();

$.table.addEventListener('click',function(e){

	var nombreRuta = Alloy.Collections.rutas.at(e.index);
	  //alert("Nombre Ruta: "+JSON.stringify(nombreRuta));
	var detalleRuta = Alloy.createController('DetalleRuta',{index:e.index, data: nombreRuta}).getView();
	    
	detalleRuta.open();
	
});

