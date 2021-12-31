const formatPokemonForSmogonGif = pokemon => {
    // convert spaces to hyphens
    pokemon = pokemon.replaceAll(' ', '');
    pokemon = pokemon.replaceAll("'", '');
    pokemon = pokemon.replaceAll("(M)", '');
    pokemon = pokemon.replaceAll("(F)", '');

    // fix one offs
    if (pokemon.toLowerCase() === 'kommo-o') {
        pokemon = 'kommoo'; // cant replace all hyphens because its breaks other mons like Rotom-Wash/Mow etc, and others like Articuno-Galar
    }

    // if pokemon has a paranthesis then there is a nickname
    const parRegEx = /\(([^)]+)\)/;
    const matches = parRegEx.exec(pokemon);

    if (matches && matches.length) {
        pokemon = matches[1];
    }

    return pokemon.toLowerCase();
}

const helpers = {
    formatPokemonForSmogonGif
}

module.exports = helpers;