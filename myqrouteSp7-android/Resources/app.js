var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.rutas = Alloy.createCollection("rutas");

Alloy.Collections.rutas.reset([ {
    id: 0,
    name: "Ruta de Puertas y Murallas",
    longitud: "2 h",
    imageURL: "/images/ruta0/ruta0.jpeg",
    desc: "Recorrido por el recinto amurallado para visitar cuatro de las puertas más significativas de Toledo."
}, {
    id: 1,
    name: "Ruta por el Toledo Judío",
    longitud: "1 h",
    imageURL: "/images/ruta1/ruta1.jpeg",
    desc: "El enredo de preciosas y empinadas callejas que dibujan la Judería transporta al paseante al Toledo Judío de la Edad Media."
}, {
    id: 2,
    name: "Ruta de Puentes y Torreones",
    longitud: "2 h",
    imageURL: "/images/ruta2/ruta2.png",
    desc: "Visita a significativos torreones y puentes de la ciudad de Toledo."
}, {
    id: 3,
    name: "Ruta por Toledo Renacentista",
    longitud: "2 h",
    imageURL: "/images/ruta3/ruta3.jpg",
    desc: "Pasea por la época brillante de la historia de Toledo y disfruta de las magníficas obras arquitectónicas que esta etapa legó a la ciudad."
}, {
    id: 4,
    name: "Ruta por Toledo Islámico",
    longitud: "1 h",
    imageURL: "/images/ruta4/ruta4.jpeg",
    desc: "Déjate llevar por el embrujo del Toledo Islámico, descubre el legado musulmán y las huellas de los falsos musulmanes, apreciando su particular estilo mudéjar."
}, {
    id: 5,
    name: "Ruta del Arte Visigodo",
    longitud: "1 h",
    imageURL: "/images/ruta5/ruta5.png",
    desc: "Puertas, puentes, murallas, calles e iglesias de la ciudad. En la siguiente ruta se recogen algunas de las piezas del Arte Visigodo más significativas "
}, {
    id: 6,
    name: "Ruta del Agua",
    longitud: "1 h",
    imageURL: "/images/ruta6/ruta6.png",
    desc: "Molinos de Agua y Baños. Dicha ruta muestra una de las áreas menos conocida de la ciudad, pero de muy importante valor histórico artístico y paisajístico, mostrando aspectos defensivos de Toledo en relación al río Tajo."
}, {
    id: 7,
    name: "Ruta de la Catedral",
    longitud: "1 h",
    imageURL: "/images/ruta7/ruta7.jpeg",
    desc: "La Catedral y la influencia de los Primados. Admira la influencia de los cardenales a lo largo de esta ruta, porque Toledo no sería Toledo sin la emblemática figura de la Catedral y ésta no sería lo que es sin la influencia de los primados."
} ]);

Alloy.Collections.paneles = Alloy.createCollection("paneles");

Alloy.Collections.paneles.reset([ {
    id: 0,
    id_loc: 0,
    name: "Puerta de Alfonso VI",
    lon: "39.862622",
    lat: "-4.025401",
    legend: "/html/panel00.html",
    video: "/video/panel00.mp4"
}, {
    id: 1,
    id_loc: 0,
    name: "Puerta de Bisagra",
    lon: "39.86277",
    lat: "-4.024957",
    legend: "/html/panel10.html",
    video: "/video/panel10.mp4"
}, {
    id: 2,
    id_loc: 0,
    name: "Puerta del Vado",
    lon: "39.861074",
    lat: "-4.02338",
    legend: "/html/panel20.html",
    video: "/video/panel20.mp4"
}, {
    id: 3,
    id_loc: 0,
    name: "Puerta del Sol",
    lon: "39.862482",
    lat: "-4.023449",
    legend: "/html/panel30.html",
    video: "/video/panel30.mp4"
}, {
    id: 4,
    id_loc: 0,
    name: "Puerta del Cambrón",
    lon: "39.859517",
    lat: "-4.032157",
    legend: "/html/panel40.html",
    video: "/video/panel40.mp4"
}, {
    id: 5,
    id_loc: 1,
    name: "Monasterio de San Juan de los Reyes",
    lon: "39.855893",
    lat: "-4.029441",
    legend: "legend",
    video: "/video/vid00.mp4"
}, {
    id: 6,
    id_loc: 1,
    name: "Sinagoga de Santa María la Blanca",
    lon: "39.856709",
    lat: "-4.029817",
    legend: "legend",
    video: "/video/vid00.mp4"
}, {
    id: 7,
    id_loc: 1,
    name: "Museo Victorio Macho",
    lon: "39.856709",
    lat: "-4.029817",
    legend: "legend",
    video: "/video/vid00.mp4"
}, {
    id: 8,
    id_loc: 1,
    name: "Museo Sefardí",
    lon: "39.856709",
    lat: "-4.029817",
    legend: "legend",
    video: "/video/vid00.mp4"
}, {
    id: 9,
    id_loc: 1,
    name: "Museo del Greco",
    lon: "39.856709",
    lat: "-4.029817",
    legend: "legend",
    video: "/video/vid00.mp4"
}, {
    id: 10,
    id_loc: 1,
    name: "Iglesia de Santo Tomé",
    lon: "39.856709",
    lat: "-4.029817",
    legend: "legend",
    video: "/video/vid00.mp4"
}, {
    id: 11,
    id_loc: 1,
    name: "Mirador de la Virgen de Gracia",
    lon: "39.856709",
    lat: "-4.029817",
    legend: "legend",
    video: "/video/vid00.mp4"
}, {
    id: 12,
    id_loc: 1,
    name: "Puenta de San Martín",
    lon: "39.856709",
    lat: "-4.029817",
    legend: "legend",
    video: "/video/vid00.mp4"
} ]);

Alloy.createController("index");