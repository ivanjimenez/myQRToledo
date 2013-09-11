function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.locModel = Alloy.createModel("rutas");
    $.__views.winruta1 = Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "/images/gradientBackground.png",
        id: "winruta1",
        barImage: "/images/bar.png",
        fullscreen: "false",
        width: "200",
        heigh: "300"
    });
    $.__views.winruta1 && $.addTopLevelView($.__views.winruta1);
    $.__views.imageURL = Ti.UI.createImageView({
        top: "0",
        width: Ti.UI.FILL,
        id: "imageURL"
    });
    $.__views.winruta1.add($.__views.imageURL);
    $.__views.name_lbl = Ti.UI.createLabel({
        top: "0dp",
        textAlign: "center",
        font: {
            fontWeight: "bold",
            fontSize: 24
        },
        color: "#fff",
        height: Ti.UI.SIZE,
        id: "name_lbl"
    });
    $.__views.winruta1.add($.__views.name_lbl);
    $.__views.desc_lbl = Ti.UI.createLabel({
        top: "80dp",
        width: "90%",
        height: "85%",
        color: "black",
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        backgroundColor: "transparent",
        id: "desc_lbl",
        bottom: "0"
    });
    $.__views.winruta1.add($.__views.desc_lbl);
    $.__views.tbRuta = Ti.UI.createView({
        backgroundColor: "orange",
        height: "50",
        borderWidth: 2,
        boderRadius: 20,
        opacity: .5,
        backgroundGradient: {
            type: "radial",
            startPoint: {
                x: 50,
                y: 50
            },
            endPoint: {
                x: 50,
                y: 50
            },
            colors: [ "orange", "white" ],
            startRadius: "90%",
            endRadius: 0,
            backfillStart: true
        },
        id: "tbRuta",
        bottom: "0"
    });
    $.__views.winruta1.add($.__views.tbRuta);
    $.__views.comenzar = Ti.UI.createButton({
        id: "comenzar",
        right: "0",
        borderRadius: "10",
        width: "40",
        height: "40",
        borderWidth: "3",
        backgroundImage: "/images/035.png"
    });
    $.__views.tbRuta.add($.__views.comenzar);
    var __alloyId0 = function() {
        $.imageURL.image = _.isFunction($.locModel.transform) ? $.locModel.transform()["imageURL"] : $.locModel.get("imageURL");
        $.name_lbl.text = _.isFunction($.locModel.transform) ? $.locModel.transform()["name"] : $.locModel.get("name");
        $.desc_lbl.text = _.isFunction($.locModel.transform) ? $.locModel.transform()["desc"] : $.locModel.get("desc");
    };
    $.locModel.on("fetch change destroy", __alloyId0);
    exports.destroy = function() {
        $.locModel.off("fetch change destroy", __alloyId0);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    Ti.API.info("ARGS: " + JSON.stringify(args));
    $.locModel.set(args.data);
    var listaPuntos = Alloy.Collections.paneles.where({
        id_loc: args.index
    });
    $.comenzar.addEventListener("click", function() {
        var puntoinfo = Alloy.createController("index", {
            args1: "Comenzar",
            ruta: listaPuntos
        }).getView();
        puntoinfo.open();
    });
    $.winruta1.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;