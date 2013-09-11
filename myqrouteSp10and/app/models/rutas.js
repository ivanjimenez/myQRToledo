exports.definition = {
	config: {
		"columns": {
			"id" : "REAL",
			"name":"TEXT",
			"longitud" : "TEXT",
			"imageURL" : "TEXT",
			"desc" : "TEXT"
			
		},
		"adapter": {
			"type": "sql",
			"collection_name": "locations"
		}
	},
	extendModel: function(Model) {      
        _.extend(Model.prototype, {
 
            // extended functions go here
 
        }); // end extend
 
        return Model;
    },
 
 
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {
 
            // extended functions go here           
 
        }); // end extend
 
        return Collection;
    }

}

