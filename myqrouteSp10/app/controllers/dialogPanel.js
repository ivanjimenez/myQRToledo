$.dialog.addEventListener('click',function(e){

      if (e.index === 0) {

        var Panel = JSON.parse(e.text);

        var panel = Alloy.Collections.paneles.at(Panel[0].id);

        var infoPanel = Alloy.createController('infoPanel',{index:Panel[0].id, STR: str, data : panel}).getView();

        infoPanel.open();
    
       }

      
});


