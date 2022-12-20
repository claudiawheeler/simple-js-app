// defined pokemonList variable with 3 pokemon in an array
let pokemonList = [
    { name: 'Bulbasaur', types: ['grass'], height: 2.2 },
    { name: 'Mew', types: ['psychic'], height: 0.4 },
    { name: 'Zubat', types: ['poison', 'flying'], height: 0.8 },
];
// created 'for' loop that iterates over each item in pokemonList
for (let i=0; i < pokemonList.length; i++) {
// added conditional to check height
    if (pokemonList[i].height > 2) {
        document.write(pokemonlist[i].name + " (height; " + pokemonList[i].height + " m) - Wow, that's big!" + "<br>")
    }
}