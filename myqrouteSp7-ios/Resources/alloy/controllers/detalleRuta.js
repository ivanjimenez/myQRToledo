function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.locModel = Alloy.createModel("rutas");
    $.__views.winRuta = Ti.UI.createWindow({
        id: "winRuta",
        barImage: "/images/bar.png"
    });
    $.__views.winRuta && $.addTopLevelView($.__views.winRuta);
    $.__views.imageURL = Ti.UI.createImageView({
        top: "0",
        width: Ti.UI.FILL,
        borderWidth: 3,
        borderRadius: 20,
        id: "imageURL"
    });
    $.__views.winRuta.add($.__views.imageURL);
    $.__views.nameLabel = Ti.UI.createLabel({
        top: "0dp",
        textAlign: "center",
        font: {
            fontWeight: "bold",
            fontSize: 24
        },
        color: "#fff",
        height: Ti.UI.SIZE,
        id: "nameLabel"
    });
    $.__views.winRuta.add($.__views.nameLabel);
    $.__views.descLabel = Ti.UI.createLabel({
        top: "200dp",
        width: "100%",
        height: "20%",
        font: {
            fontWeight: "bold",
            fontSize: 14
        },
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: "orange",
        opacity: .8,
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
        id: "descLabel",
        bottom: "0"
    });
    $.__views.winRuta.add($.__views.descLabel);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.comenzar = Ti.UI.createButton({
        id: "comenzar",
        title: "COMENZAR",
        toucheEnabled: "true"
    });
    __alloyId1.push($.__views.comenzar);
    $.__views.__alloyId3 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId1.push($.__views.__alloyId3);
    $.__views.toolbarRuta = Ti.UI.iOS.createToolbar({
        items: __alloyId1,
        id: "toolbarRuta",
        bottom: "0",
        opacity: "0.5",
        barColor: "transparent",
        backgroundImage: "/images/barNoLogo.png"
    });
    $.__views.winRuta.add($.__views.toolbarRuta);
    var __alloyId4 = function() {
        $.imageURL.image = _.isFunction($.locModel.transform) ? $.locModel.transform()["imageURL"] : $.locModel.get("imageURL");
        $.nameLabel.text = _.isFunction($.locModel.transform) ? $.locModel.transform()["name"] : $.locModel.get("name");
        $.descLabel.text = _.isFunction($.locModel.transform) ? $.locModel.transform()["desc"] : $.locModel.get("desc");
    };
    $.locModel.on("fetch change destroy", __alloyId4);
    exports.destroy = function() {
        $.locModel.off("fetch change destroy", __alloyId4);
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
        puntoinfo.open({
            transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
        });
    });
    $.winRuta.addEventListener("close", function() {
        $.destroy();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;