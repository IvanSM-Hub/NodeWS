
import { getUUID } from "../../src/plugins/getUUID.plugin";


describe('plugins/getUUID.plugin.ts', ()=> {

    test('getUUID() should return a UUID', () => {

        const uuid = getUUID();

        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);

    });

});
