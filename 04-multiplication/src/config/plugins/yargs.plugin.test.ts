// import { yarg } from './yargs.plugin';

const runComand = async ( arg: string[] ) => {
    process.argv = [ ...process.argv, ...arg ];

    const { yarg } = await import('./yargs.plugin');

    return yarg;
}

describe('yargs.plugin.ts', () => {
    
    const orignalArgv = process.argv;
    
    beforeEach(() => {
        process.argv = orignalArgv;
        jest.resetModules();
    });
    
    test('should return default values', async () => {

        const argv = await runComand(['-b','5']);

        expect( argv ).toEqual( expect.objectContaining(
            {
                b: 5,
                l: 10,
                s: false,
                n: 'table',
                d: './outputs'
            }
        ) );

    });

    test('Should return confuguration with custom values', async () => {

        const argv = await runComand(['-b','2','-l','20','-s','true','-n','table2','-d','test-outputs']);

        expect( argv ).toEqual( expect.objectContaining(
            {
                b: 2,
                l: 20,
                s: true,
                n: 'table2',
                d: 'test-outputs'
            }
        ) );

    });

});
