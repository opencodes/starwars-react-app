import React from 'react'
import { useParams } from 'react-router-dom';
import CharacterProfile from '../components/CharacterProfile'
import { useAppContext } from '../context/AppContext';




const Details = () => {
  let { id } = useParams();
  const { characters } = useAppContext();
  const character = characters?.results.find(c => c.id == id)

  return (
    <>
      <div className="container">Details
        {character && <CharacterProfile character={character} />}
      </div>
    </>
  )
}

export default Details