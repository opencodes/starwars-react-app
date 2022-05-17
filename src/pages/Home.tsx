import React, { useEffect } from 'react'
import CharacterList from '../components/CharacterList'
import { END_POINT } from '../constants/api.config';
import { useAppContext } from '../context/AppContext';
import { useFetch } from '../hooks/useFetch';
import { HttpMethods } from '../interface/app.interface';
import { ICharacterResponse } from '../interface/swapi.interface';
import { enhancedCharacterObject, toObject } from '../service/util.service';
import Head from './components/Head';
import Paging from './components/Paging';


const Home = () => {
    const { characters, setCharacters, setFilms, setPlanets, setStarships } = useAppContext();
    const { data: people, loading: loadingPeople, error: peopleErr, retry } = useFetch(
        HttpMethods.GET,
        END_POINT.people
    );
    // const { data: planets, loading: loadingPlanets, error: planetsErr } = useFetch(
    //     HttpMethods.GET,
    //     END_POINT.planets
    // );
    // const { data: starships, loading: loadingStarships, error: starshipErr } = useFetch(
    //     HttpMethods.GET,
    //     END_POINT.starships
    // );
    // const { data: films, loading: loadingFilms, error: filmErr } = useFetch(
    //     HttpMethods.GET,
    //     END_POINT.films
    // );

    const goToPage = (url: string) => {
        retry(url)
    }

    useEffect(() => {
        if (people) {
            let characterResponse: ICharacterResponse = {
                count: people.count,
                next: people.next,
                previous: people.previous,
                results: enhancedCharacterObject(people.results)
            };
            setCharacters(characterResponse)
            // setFilms(toObject(films.results))
            // setPlanets(toObject(planets.results))
            // setStarships(toObject(starships.results));
            // console.log();

        }
    }, [people])

    return (
        <>
            <Head />
            <Paging goToPage={goToPage} />
            {characters && <CharacterList />}
            <Paging goToPage={goToPage} />
        </>
    )

}

export default Home