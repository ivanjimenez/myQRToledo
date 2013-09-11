

$.scan.addEventListener('click',function(e){

var Panel = JSON.parse($.txtModelo.value);

var panel = Alloy.Collections.paneles.at(Panel[0].id);



var infoPanel = Alloy.createController('infoPanel',{data : panel}).getView();

infoPanel.open();

});




$.winPanel.addEventListener('swipe',function(e){
	$.winPanel.close({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});

});

