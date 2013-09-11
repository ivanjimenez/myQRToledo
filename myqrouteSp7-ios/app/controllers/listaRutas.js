var locations = Alloy.Collections.rutas;


$.returnMapa.addEventListener('click', function (e){

	$.listaRutas.close({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});

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
	var detalleRuta = Alloy.createController('detalleRuta',{index:e.index, data: nombreRuta});
	    
	$.nav.open(detalleRuta.getView(), {animated : true});
	
});

