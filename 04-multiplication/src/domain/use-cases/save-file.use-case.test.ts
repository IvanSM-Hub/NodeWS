import { SaveFile } from './save-file.use-case';
import fs from 'fs';


describe('SaveFileUseCase', () => {

    const outputOptions = { fileContent: 'test content' };
    const outputFilePath = 'outputs/table.txt';

    const customOptions = {
        fileContent: 'custom content',
        fileDestination: 'custom-outputs/file-destination',
        fileName: 'custom-table-name'
    };
    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    afterAll(() => {
        const outputFolderExists = fs.existsSync('outputs');
        if ( outputFolderExists ) fs.rmSync('outputs', {recursive: true});

        const customFolderExists = fs.existsSync('custom-outputs');
        if ( customFolderExists ) fs.rmSync( 'custom-outputs', {recursive: true});
    });

    test('Should save file with default values', () => {

        const saveFile = new SaveFile();
        
        const result = saveFile.execute( outputOptions );
        const fileExists = fs.existsSync(outputFilePath);
        const fileContent = fs.readFileSync(outputFilePath, {encoding: 'utf-8'});
        
        expect( result ).toBeTruthy();
        expect( fileExists ).toBeTruthy();
        expect( fileContent ).toBe( outputOptions.fileContent );

    });

    test('Should save file with custom values', () => {
        
        const saveFile = new SaveFile();
        const result = saveFile.execute( customOptions );
        const fileExists = fs.existsSync( customFilePath );
        const fileContent = fs.readFileSync( customFilePath, {encoding: 'utf-8'} );

        expect( result ).toBeTruthy();
        expect( fileExists ).toBeTruthy();
        expect( fileContent ).toBe( customOptions.fileContent );

    });

    test('Should return false if directory could not be created', () => {

        const saveFile = new SaveFile();
        const mkdirMock = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('This is a custom message from testing') }
        );
        const result = saveFile.execute( customOptions );

        expect( result ).toBe( false );

        mkdirMock.mockRestore();

    });
    
    test('Should return false if file could not be created', () => {

        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('This is a custom writing error message') }
        );
        const result = saveFile.execute( {fileContent: 'hola'} );

        expect( result ).toBe( false );

        writeFileSpy.mockRestore();

    });

});
