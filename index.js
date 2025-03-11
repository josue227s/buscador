const { sinParámetros, Sort, Search, Tag } = require('./pelis.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


 
function iniciarPrograma() {
    console.log("¡Bienvenido al buscador de películas!");
    rl.question("Por favor, introduce un argumento para continuar (--Sort (--Sort + title, rating, tags, director, year o duration), --Search, --Tag o presiona Enter para la opción por defecto):): ", (respuesta) => {

        const parametro = respuesta.trim().toLowerCase();

        

switch (parametro) {
    case '':
        sinParámetros();
        break;
    case '--sort title':
    case '--sort rating':
    case '--sort tags':
    case '--sort director':
    case '--sort year':
    case '--sort duration':
        Sort(parametro);
        break;
    case '--search':
        rl.question("Introduce el término a buscar: ", (termino) => {
            Search(termino)
                rl.close();
            });
        return;
    case '--tag':
        rl.question("Introduce el tag a buscar: ", (tag) => {
            Tag(tag)
                rl.close();
            });
        return;
    default:
        console.log("Parámetro no válido. Por favor, usa '--Sort', '--Search'o '--Tag'.");
};



        rl.close(); 
    });
    
}


iniciarPrograma();



