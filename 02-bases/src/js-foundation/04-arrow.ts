import { User } from "./03-callbacks";

const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
];

export const getUserById = ( id: number, callback: any ) => {
    const user = users.find( ( user ) => user.id == id );

    ( user )
    ? callback( null, user )
    : callback( `USER not found with user id ${id}` );

}

