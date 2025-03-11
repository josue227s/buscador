const fs = require("fs");
const datos = JSON.parse(fs.readFileSync(__dirname +"/pelis.json"));



function sinParámetros() {

    console.table(datos)
}



function Sort(parametro) {

    if(parametro === '--sort title') {
        datos.sort((a, b) => a.title.localeCompare(b.title));
        return console.table(datos)
        } else if (parametro === '--sort rating') {
            datos.sort((a, b) => a.rating - b.rating);
            return console.table(datos)
        } else if (parametro === '--sort tags') {
            datos.sort((a, b) => a.tags[0].localeCompare(b.tags[0]));
            return console.table(datos)
        } else if (parametro === '--sort director') {
            datos.sort((a, b) => a.director.localeCompare(b.director));
            return console.table(datos)
        } else if (parametro === '--sort year') {
            datos.sort((a, b) => a.year - b.year);
            return console.table(datos)
        } else if (parametro ==='--sort duration') {
            datos.sort((a, b) => a.duration.localeCompare(b.duration))
            return console.table(datos)
        } 

}



function Search(termino) {

    const peliSearch = datos.filter(pelicula => pelicula.title.toLowerCase().includes(termino.toLowerCase()))
    
    if (peliSearch.length === 0) {
        return console.log(`Palabra "${termino}" no encontrada en los títulos.`);
    }

    return console.table(peliSearch)

}



function Tag(tag) {

    const pelisTag = datos.filter(peli => peli.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase()))
    
    if (pelisTag.length === 0) {
        return console.log(`El tag "${tag}" no se encontró en los títulos.`);
    }

    return console.table(pelisTag)

}


module.exports = { sinParámetros, Sort, Search, Tag };

