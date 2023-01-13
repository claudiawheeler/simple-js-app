//wrapped array in IIFE

let pokemonRepository = (function () {
    let pokemonList = [
        { name: 'Bulbasaur', types: ['grass'], height: 2.2 },
        { name: 'Mew', types: ['psychic'], height: 0.4 },
        { name: 'Zubat', types: ['poison', 'flying'], height: 0.8 },
    ];

    function getAll () {
        return pokemonList;
    }
    function add (pokemon) {
    pokemonList.push(pokemon);
    }
    return {
        getAll: getAll,
        add: add
    }
})()

console.log(pokemonRepository.getAll())

// replaced 'for' with 'forEach' loop

pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height > 2) {
        document.write(pokemon.name + " (height; " + pokemon.height + " m) - Wow, that's big!" + "<br>")
    } else {
        document.write(pokemon.name + " (height; " + pokemon.height + ")" + "<br>")
    }
});
