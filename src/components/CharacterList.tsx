import { useAppContext } from "../context/AppContext";
import { ICharacter } from "../interface/swapi.interface";
import CharacterCard from "./CharacterCard";


const CharacterList = () => {
  const { characters, setFavouriteCharacters, favouriteCharacters } = useAppContext();
  let existingItems = favouriteCharacters.map(f => f.id);
  const saveToFavourite = (item: ICharacter) => {
    if (!existingItems.includes(item.id)) {
      let updatedList = [...favouriteCharacters, item];
      setFavouriteCharacters(updatedList)
    }
  }
  const isFavourite = (item: ICharacter) => existingItems.includes(item.id);

  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {characters && characters.results.map((c: ICharacter, i: number) =>
          <div style={{ width: '20%' }}
            key={c.name}
          >
            <CharacterCard character={c}
              onFavouriteClick={saveToFavourite}
              disableFav={isFavourite(c)} />
          </div>
        )}
      </div>
    </div>

  )
}

export default CharacterList;