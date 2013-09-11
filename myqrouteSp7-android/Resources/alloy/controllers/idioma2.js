function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var con = Alloy.createController("listarutas");
    require("alloy/animation");
    $.index.open();
    $.opIdiomas.show();
    $.opIdiomas.addEventListener("click", function() {
        con.getView().open({
            animated: Ti.UI.iPhone.AnimationStyle.CURL_DOWN
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;