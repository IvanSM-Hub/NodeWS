import { getUserById } from './../../src/js-foundation/03-callbacks';


describe('js-foundation/04-arrow', () => {
    
    //! caos de no exito
    test('getUserById should return an error if use does not exists', (done) => {

        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
        
            done();
        });

    });

    //! Caso de exito
    test('getUserById should return an user if user exists', (done) => {

        const id = 1;
        getUserById(id,(err,user) => {
            expect( err ).toBeUndefined();
            expect( user ).toEqual({
                id: 1,
                name: 'John Doe'
            });

            done();
        });

    });

});