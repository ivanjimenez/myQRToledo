var listarutas = Alloy.Collections.paneles;


function addEntry() {
	 var entry = Alloy.createModel('rutas', {
        name : $.name.value });

    // Add new model to the collection, use silent=true
    // so that a "change" event is not fired and the
    // UI is re-rendered.
    listarutas.add(entry, {silent:true});

    // Save the entry to persistence, which will re-render
    // the UI based on the binding.
    entry.save();
	
}




