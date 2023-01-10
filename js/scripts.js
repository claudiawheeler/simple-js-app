// defined pokemonList variable with 3 pokemon in an array

let pokemonList = [
    { name: 'Bulbasaur', types: ['grass'], height: 2.2 },
    { name: 'Mew', types: ['psychic'], height: 0.4 },
    { name: 'Zubat', types: ['poison', 'flying'], height: 0.8 },
];

// replaced 'for' with 'forEach' loop

pokemonList.forEach(function(pokemon) {
    if (pokemon.height > 2) {
        document.write(pokemon.name + " (height; " + pokemon.height + " m) - Wow, that's big!" + "<br>")
    } else {
        document.write(pokemon.name + " (height; " + pokemon.height + ")" + "<br>")
    }
});
