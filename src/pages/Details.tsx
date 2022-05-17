import React from 'react'
import { useParams } from 'react-router-dom';
import CharacterProfile from '../components/CharacterProfile'
import { useAppContext } from '../context/AppContext';
import Head from './components/Head';




const Details = () => {
  let { id } = useParams();
  const { characters } = useAppContext();
  const character = characters?.results.find(c => c.id == id)

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
  // setFilms(toObject(films.results))
  // setPlanets(toObject(planets.results))
  // setStarships(toObject(starships.results));
  // console.log();
  return (
    <>
      <Head onSearch={() => { }} />
      <div className="container">
        <h5>Profile</h5>
        <hr />
        {character && <CharacterProfile character={character} />}
      </div>
    </>
  )
}

export default Details