//wrapped array in IIFE

var pokemonRepository = (function () {
    let repository = [
        { name: 'Bulbasaur', types: ['grass'], height: 2.2 },
        { name: 'Mew', types: ['psychic'], height: 0.4 },
        { name: 'Zubat', types: ['poison', 'flying'], height: 0.8 },
        { name: 'Pikachu', types: ['electric'], height: 0.3 },
    ];

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "types" in pokemon &&
            "height" in pokemon
        ) {
            repository.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }
    function getAll () {
        return repository;
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener('click', (Event) => showDetails(pokemon));
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    }
    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem
    };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
});
