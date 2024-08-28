
import { getPokemonById } from "../../src/js-foundation/06-promises";

describe( 'js-foundation/06-promises.ts', () => {

    //! Case de exito
    test( 'getPokemonById should return a pokemon', async() => {

        const pokemonId = 1;
        const pokemon = await getPokemonById( pokemonId );

        expect( pokemon ).toBe('bulbasaur');

    } );

    //! Caso de captura de excepción
    test('shoul reurn an error if polemon does not exist', async() => {

        const pokemonId = 1000000000000000000000;
        try {
            await getPokemonById( pokemonId );
            expect( true ).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon not found with the id ${ pokemonId }`);
        }



    });

} );
