import { ServerApp } from './presentation/server-app';
describe('App', () => {

    test('Should call Server.run with values', () => {
        const serverRunMock = jest.fn();
        ServerApp.run = serverRunMock;

        process.argv = [
            'node',
            'app.ts',
            '-b', '2',
            '-l', '10',
            '-s',
            '-n', 'test-file',
            '-d', 'test-destination'
        ];

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 2,
            limit: 10,
            showTable: true,
            name: 'test-name',
            destination: 'test-destination'
        });

    });

});