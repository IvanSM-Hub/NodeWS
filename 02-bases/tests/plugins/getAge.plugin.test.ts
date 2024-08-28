
import { getAge } from "../../src/plugins/getAge.plugin";

describe('plugins/getAge.plugin.ts', () => {

    test('getAge() should return the age of a person', () => {

        const birthdate = '1985-01-01';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');

    });

    test('getAge should return current age', () => {

        const birthdate = '1985-01-01';
        const age = getAge(birthdate);
        const testAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(testAge);
 
    });

    test('getAge should return 0 years', () => {

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

        const birthdate = '1995-12-20';

        const age = getAge(birthdate);

        expect(age).toBe(0);

    });

});
