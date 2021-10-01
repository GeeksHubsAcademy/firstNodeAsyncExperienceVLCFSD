
const axios = require('axios');

let characters = async () => {
    let resultados = await axios.get('https://rickandmortyapi.com/api/character');
    console.log(resultados.data);
}


characters();
console.log("Fabrizzio está impaciente 24/7");
console.log("Los alumnos no entienden esto");
console.log("Alfonso CUMPLE sus promesas");
