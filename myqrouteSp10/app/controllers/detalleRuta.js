
var args = arguments[0] || {};


Ti.API.info("ARGS: "+JSON.stringify(args));

$.locModel.set(args.data);

var listaPuntos = Alloy.Collections.paneles.where({id_loc:args.index});



$.comenzar.addEventListener('click',function(e){


	var puntoinfo = Alloy.createController('index',{args1:'Comenzar', ruta:listaPuntos}).getView();

	puntoinfo.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});


});

$.winruta1.addEventListener("close", function(){

    $.destroy();

});


