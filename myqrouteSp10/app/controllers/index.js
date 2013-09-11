

var args = arguments[0] || {};


var gps = require('gps');
var readerQR = require('readerQR');
var str;
var num = 0;

 

$.mapa.addEventListener('load', function(e){

 
  //Si es la primera vez que carga el mapa
  if(args.args1 === "Comenzar"){

     var dialog = Ti.UI.createAlertDialog({
      title:"Comenzamos con el primer punto de la ruta",
      style: Ti.UI.iPhone.AlertDialogStyle.DEFAULT,
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

var dialog = Ti.UI.createAlertDialog({

        title:'Escanear Panel',
        style:Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
        buttonNames : ['QR','cancel']
   
});

var test = function(e){

          if (e.index === 0) {

            var Panel = JSON.parse(e.text);

            var panel = Alloy.Collections.paneles.at(Panel[0].id);

            var infoPanel = Alloy.createController('infoPanel',{index:Panel[0].id, STR: str, data : panel}).getView();

            infoPanel.open();
        
           }
              
     }

dialog.addEventListener('click',test);



var leerPanel = function(e){
  
    dialog.show();


}

Ti.App.addEventListener('app:leerPanel',leerPanel);

 


$.idioma.addEventListener('click',function(e){

Alloy.createController('idioma').getView().show();

});




$.coor.addEventListener('click',function(){


 Alloy.createController('modoUbicacion').getView().show();
    


});

$.Ruta.addEventListener('click',function(e){

    var v2 = Alloy.createController('listaRutas').getView();
    v2.open({transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT});

});



$.mapa.open();