var args = arguments[0] || {};

$.panelModel.set(args.data);

/*alert(args.STR+" "+args.index);
*/
var str = args.STR;
var num = args.index;

$.cancel.addEventListener('click',function(e){

$.vidWin.close();

});

$.siguiente.addEventListener('click',function(e){

    if (num > str.length ) {
      
      Ti.UI.createAlertDialog({
                      title : "Fin de Ruta",
                      message : 'Debe seleccionar otra ruta'
                  }).show();

      $.vidWin.close();

  }

  else {
    num = num +1;
    
    Ti.App.fireEvent('app:panelCero', 
                { 
   
                        lon: str[num].lon,
                        lat: str[num].lat,
                        nombrePanel: str[num].name
                  
                });

    if(str.length === num + 1) {

      Ti.UI.createAlertDialog({
                      title : "Fin de Ruta",
                      message : 'Debe seleccionar otra ruta'
                  }).show();

      $.vidWin.close();
    }
    else{
      alert("Siguiente Punto de la Ruta");
      $.vidWin.close();
    }

  	}

     
});

$.camera.addEventListener('click',function(e){

   var cameraOptions = {
        success : function(event) {
            var image = event.media;

            
            //save for future use
            var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'photo' + args.data.get("id") + '.png');
            f.write(image);

         
        },
        cancel : function() {
            // cancel and close window
        },
        error : function(error) {
            var a = Ti.UI.createAlertDialog({
                title : "Error: No hay cámara"
            });
            if (error.code == Ti.Media.NO_CAMERA) {
                a.setMessage("NO HAY CÁMARA");
            } else {
                a.setMessage('Error inesperado: ' + error.code);
            }
            a.show();
        },
        saveToPhotoGallery : true,
        allowEditing : true,
        mediaTypes : [Ti.Media.MEDIA_TYPE_PHOTO]
    };

    // display camera OR gallery
    if (Ti.Media.isCameraSupported) {
        Ti.Media.showCamera(cameraOptions);
    } else {
        Ti.Media.openPhotoGallery(cameraOptions);
    }

});

$.vidWin.addEventListener("close", function(){

    $.destroy();

});

//$.vidWin.open();