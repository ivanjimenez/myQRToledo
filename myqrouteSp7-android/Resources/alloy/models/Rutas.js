exports.definition = {
    config: {
        columns: {
            id: "REAL",
            name: "TEXT",
            longitud: "TEXT",
            imageURL: "TEXT",
            desc: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "locations"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("rutas", exports.definition, []);

collection = Alloy.C("rutas", exports.definition, model);

exports.Model = model;

exports.Collection = collection;