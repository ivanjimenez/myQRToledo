var args = arguments[0] || {};

$.panelModel.set(args.data);


var str = args.STR;
var num = parseInt(args.index);
var data = args.data;



$.siguiente.addEventListener('click',function(e){
//alert("strLen: " + str.length + " num: " + num);
    

  
    num = num + 1;
    if ( (num-1) == str[(str.length)-1].id) {
      
      Ti.UI.createAlertDialog({
                      title : "Fin de Ruta",
                      message : 'Debe seleccionar otra ruta'
                  }).show();
     $.vidWin.close();
                   
      

    } else {
      
    Ti.App.fireEvent('app:panelCero', 
                { 
   
                        lon: str[num].lon,
                        lat: str[num].lat,
                        nombrePanel: str[num].name
                  
                });

     //alert("Siguiente Punto de la Ruta");
     $.vidWin.close();
    }


    
    

     
});

$.vidWin.addEventListener("close", function(){

    $.destroy();

});


$.cancel.addEventListener('click',function(e){

$.vidWin.close();

});

//$.vidWin.open();