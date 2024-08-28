
import { Hero, heroes } from "../data/heroes";

export const findHeroById = ( id: number ): Hero|undefined => {
    return heroes.find( (heroes) => heroes.id == id );
}