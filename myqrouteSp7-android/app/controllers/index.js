

var args = arguments[0] || {};

//Para sacar el tamaño de la ruta
/*var rutaTam = Alloy.Collections.listapuntos.where({id_loc: 1});
var ruta = rutaTam.at(0);*/

var gps = require('gps');
var readerQR = require('readerQR');
var str;
var num = 0;

var panelQR = require('panelQR');



 

$.mapa.addEventListener('load', function(e){

  if(args.args1 === "Comenzar"){

     var dialog = Ti.UI.createAlertDialog({
      title:"Comenzamos con el primer punto de la ruta",
     
      buttonNames : ['OK']
     });
     dialog.show();
     
     
   str = JSON.parse(JSON.stringify(args.ruta));
           // alert("hey" + str[0].lon + "length: " + str.length );


          	Ti.App.fireEvent('app:panelCero', 
                      { lon: str[0].lon,
                        lat: str[0].lat,
                        nombrePanel: str[0].name
                        
                      });
      
  }

});



   Ti.App.addEventListener('app:leerPanel',function(e){

	
	var inputText = Ti.UI.createTextField();
	var Panel, panel, infoPanel;
    var dialog = Ti.UI.createAlertDialog({

      title:'Escanear Panel',
      //androidView: inputText,
      //style: Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
      
      buttonNames : ['QR','Panel','cancel']
 
    });

    dialog.addEventListener('click',function(e){
     if (e.index === 0) {

        Panel = JSON.parse(inputText.value);
       //Panel = JSON.parse(e.text);

        panel = Alloy.Collections.paneles.at(Panel[0].id);

        infoPanel = Alloy.createController('infoPanel',{index:Panel[0].id, STR: str, data : panel}).getView();

        infoPanel.open();
        alert(str.length);
  
     }
     else if (e.index === 1) {
     	
     	panelQR.escanear();
        var idRut = panelQR.qResult();	   	
        panel = Alloy.Collections.paneles.at(idRut);
     	
     	//Panel = JSON.parse(e.text);
     	//panel = Alloy.Collections.paneles.at(Panel);
     	
     	alert("index: "+idRut+" "+"str: "+ str.length +" " + " panel: " + panel );
     	
     	
        infoPanel = Alloy.createController('infoPanel',{index:idRut, STR : JSON.parse(JSON.stringify(args.ruta)), data : panel}).getView();

        infoPanel.open();
       
     }
    });

    dialog.show();

   });

	

/*$.siguiente.addEventListener('click',function(e){




    if (num > str.length ) {
      
      Ti.UI.createAlertDialog({
                      title : "Fin de Ruta",
                      message : 'Debe seleccionar otra ruta'
                  }).show();

  }

  else {
   
    
    Ti.App.fireEvent('app:panelCero', 
                { 
   
                        lon: str[num].lon,
                        lat: str[num].lat,
                        nombrePanel: str[num].name
                  
                });
    alert("Punto: "+num);
     num = num +1;

  	}
     
});
*/

$.idioma.addEventListener('click',function(e){

Alloy.createController('idioma').getView().show();

})

$.coor.addEventListener('click',function(){


 Alloy.createController('modoUbicacion').getView().show();
    


});

$.Ruta.addEventListener('click',function(e){

    var v2 = Alloy.createController('listarutas').getView();
    v2.open();

});



$.mapa.open();