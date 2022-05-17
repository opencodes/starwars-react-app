import React, { useEffect } from 'react'
import CharacterList from '../components/CharacterList'
import { END_POINT } from '../constants/api.config';
import { useAppContext } from '../context/AppContext';
import { useFetch } from '../hooks/useFetch';
import { HttpMethods } from '../interface/app.interface';
import { ICharacterResponse } from '../interface/swapi.interface';
import { enhancedCharacterObject } from '../service/util.service';
import Head from './components/Head';
import Paging from './components/Paging';


const Home = () => {
    const { characters, setCharacters } = useAppContext();
    const { data: people, retry } = useFetch(
        HttpMethods.GET,
        END_POINT.people
    );

    const goToPage = (url: string) => {
        retry(url)
    }

    const onSearch = (search: string) => {
        retry(`https://swapi.dev/api/people/?search=${search}`)
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
        }
    }, [people, setCharacters])

    return (
        <>
            <Head onSearch={onSearch} />
            <Paging goToPage={goToPage} />
            {characters && <CharacterList />}
            <Paging goToPage={goToPage} />
        </>
    )

}

export default Home