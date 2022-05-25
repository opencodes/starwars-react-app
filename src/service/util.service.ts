import { ICharacter } from "../interface/swapi.interface";

export const getId = (url: string) => {
    const urlId = url.split('/');
    return urlId[urlId.length - 2];
}

export const enhancedCharacterObject = (results: any[]): ICharacter[] => {
    return results.map(c => {
        let id = getId(c.url);
        return {
            name: c.name,
            height: c.height,
            mass: c.mass,
            hair_color: c.hair_color,
            skin_color: c.skin_color,
            eye_color: c.eye_color,
            birth_year: c.birth_year,
            gender: c.gender,
            homeworld: getId(c.homeworld),
            films: c.films.map((film:string)=>getId(film)),
            species: c.species,
            vehicles: c.vehicles.map((v:string)=>getId(v)),
            starships: c.starships.map((v:string)=>getId(v)),
            created: c.created,
            edited: c.edited,
            url: c.url,
            id: id,
            imgURL: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
        }
    })
}


export const toObject = (results: any[]) => {
    let obj:{[key:string]:any} = {};
    results.forEach(r => {
        obj[getId(r.url).toString()] = r;
    });
    return obj;
}
