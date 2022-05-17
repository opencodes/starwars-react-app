import { useEffect, useState } from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import { ICharacter, ICharacterResponse } from './interface/swapi.interface';
import { Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';
import axios from 'axios';
import { END_POINT } from './constants/api.config';


function App() {
  const [characters, setCharacters] = useState<ICharacterResponse | null>(null);
  const [favouriteCharacters, setFavouriteCharacters] = useState<ICharacter[]>([]);
  const [films, setFilms] = useState<any>();
  const [planets, setPlanets] = useState<any>();
  const [starships, setStarships] = useState<any>();

  useEffect(() => {
    axios
      .get(END_POINT.starships)
      .then((res) => {
        console.log("Done");

      })
  }, [])


  return (
    <>
      {/* <AppContext.Provider value={{
        favouriteCharacters,
        setFavouriteCharacters,
        characters,
        setCharacters,
        films,
        setFilms,
        planets,
        setPlanets,
        starships,
        setStarships
      }}>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/characters/:id" element={<Details />}></Route>
        </Routes>
      </AppContext.Provider> */}
    </>

  );
}

export default App;
