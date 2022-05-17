import { createContext, useContext } from 'react';
import { ICharacter, ICharacterResponse } from '../interface/swapi.interface';


interface IContextData {
    favouriteCharacters: ICharacter[];
    setFavouriteCharacters: Function,
    characters: ICharacterResponse | null;
    setCharacters: Function;
    films: any;
    setFilms: Function;
    planets: any;
    setPlanets: Function;
    starships: any;
    setStarships: Function;
}
const contextData: IContextData = {
    favouriteCharacters: [],
    characters: null,
    films: [],
    starships: [],
    planets: [],
    setFilms: () => { },
    setPlanets: () => { },
    setStarships: () => { },
    setCharacters: () => { },
    setFavouriteCharacters: () => { },
};

export const AppContext = createContext(contextData);
export const useAppContext = () => useContext(AppContext);