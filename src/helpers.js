const formatPokemonForSmogonGif = pokemon => {
    // convert spaces to hyphens
    pokemon = pokemon.replaceAll(' ', '');
    pokemon = pokemon.replaceAll("'", '');

    // fix one offs
    if (pokemon.toLowerCase() === 'kommo-o') {
        pokemon = 'kommoo'; // cant replace all hyphens because its breaks other mons like Rotom-Wash/Mow etc, and others like Articuno-Galar
    }

    return pokemon.toLowerCase();
}

const helpers = {
    formatPokemonForSmogonGif
}

module.exports = helpers;