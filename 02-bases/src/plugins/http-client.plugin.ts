
import axios from 'axios';

export const httpClientPlugin = {

    get: async (url: string) => {
        // const resp = await fetch( url );
        // return await resp.json();

        const { data } = await axios.get( url );
        return data;

    },

    post: async (url: string, body: any) => {
        throw new Error('not implemented method');
    },
    put: async (url: string, body: any) => {
        throw new Error('not implemented method');
    },
    delete: async (url: string) => {
        throw new Error('not implemented method');
    },

}
