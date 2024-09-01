import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
import { ServerApp } from './server-app';

describe('Server App', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        destination: 'test-destination',
        name: 'test-name'
    };

    test('Should create ServerApp instance', () => {

        const serverApp = new ServerApp;

        expect(serverApp).toBeInstanceOf(ServerApp);

    });

    test('Should have ServerApp a static function run', () => {

        expect(typeof ServerApp.run).toBe('function');

    });

    test('Should run ServerApp with options', () => {

        // const logSpy = jest.spyOn(console, 'log');
        // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        // const saveTableSpy = jest.spyOn(SaveFile.prototype, 'execute');

        // ServerApp.run(options);

        // expect( logSpy ).toHaveBeenCalledTimes(2);
        // expect( logSpy ).toHaveBeenCalledWith('server running...');
        // expect( logSpy ).toHaveBeenCalledWith('File created!');

        // expect( createTableSpy ).toHaveBeenCalledTimes(1);
        // expect( createTableSpy ).toHaveBeenCalledWith({
        //     base: options.base,
        //     limit: options.limit
        // });
        // expect( saveTableSpy ).toHaveBeenCalledTimes(1);
        // expect( saveTableSpy ).toHaveBeenCalledWith({
        //     fileDestination: options.destination,
        //     fileName: options.name,
        //     fileContent: expect.any(String)
        // });

    });

    test('Should run with custom values mocked', () => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createTableMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);

        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createTableMock;
        SaveFile.prototype.execute = saveFileMock;
        
        ServerApp.run(options);

        expect( logMock ).toHaveBeenCalledWith('server running...');
        expect( createTableMock ).toHaveBeenCalledWith({
            base: options.base,
            limit: options.limit
        });
        expect( saveFileMock ).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            fileDestination: options.destination,
            fileName: options.name
        });
        expect( logMock ).toHaveBeenCalledWith('File created!');
        expect( logErrorMock ).not.toBeCalledWith();

    });

});
