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
			"collection_name": "listapuntos"
		}
	}
}
