exports.definition = {
    config: {
        columns: {
            id: "REAL",
            id_loc: "REAL",
            name: "TEXT",
            lon: "TEXT",
            lat: "TEXT",
            legend: "TEXT",
            video: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "listapuntos"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("paneles", exports.definition, []);

collection = Alloy.C("paneles", exports.definition, model);

exports.Model = model;

exports.Collection = collection;