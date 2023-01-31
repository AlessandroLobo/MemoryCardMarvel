import axios from 'axios';

export const PokemonApi = () => {
    // var endpoints = []
    // for (var i = 1; i < 20; i++) {
    //     endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    // }
    return axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=50")
        .then((res) => res.data.results)
        .catch((err) => console.log(err))
        
}


var endpoints = []
for (var i = 1; i < 20; i++) {
    endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
}
let newArray = []
var response = axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
    res.forEach(element => {
        newArray.push(element.data.sprites)
    });
    // console.log(newArray[0])
})
