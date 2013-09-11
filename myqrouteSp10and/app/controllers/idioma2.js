
var con = Alloy.createController('listarutas');
require('alloy/animation');

$.index.open();
$.opIdiomas.show();

$.opIdiomas.addEventListener('click',function(){

	con.getView().open({animated: Ti.UI.iPhone.AnimationStyle.CURL_DOWN});

});






