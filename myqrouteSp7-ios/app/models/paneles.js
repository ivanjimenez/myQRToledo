exports.definition = {
	config: {
		"columns": {
			"id" : "REAL",
			"id_loc" : "REAL",
			"name":"TEXT",
			"lon" : "TEXT",
			"lat" : "TEXT",
			"legend" : "TEXT",
			"video" : "TEXT"
			
		},
		"adapter": {
			"type": "sql",
			"collection_name": "paneles"
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
