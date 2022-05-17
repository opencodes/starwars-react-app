import { useAppContext } from "../context/AppContext";
import { ICharacter } from "../interface/swapi.interface";
import CharacterCard from "./CharacterCard";


const CharacterList = () => {
  const { characters, setFavouriteCharacters, favouriteCharacters } = useAppContext();

  const saveToFavourite = (item: ICharacter) => {
    let existingItems = favouriteCharacters.map(f => f.id);
    if (!existingItems.includes(item.id)) {
      let updatedList = [...favouriteCharacters, item];
      setFavouriteCharacters(updatedList)
    }

  }

  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {characters && characters.results.map((c: ICharacter, i: number) =>
          <div style={{ width: '20%' }}
            key={c.name}
          >
            <CharacterCard character={c} onFavouriteClick={saveToFavourite} />
          </div>
        )}
      </div>
    </div>

  )
}

export default CharacterList;