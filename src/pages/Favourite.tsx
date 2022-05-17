import CharacterCard from '../components/CharacterCard'
import { useAppContext } from '../context/AppContext'
import { ICharacter } from '../interface/swapi.interface'
import Head from './components/Head'

type Props = {}

const Favourite = (props: Props) => {
    const { favouriteCharacters, setFavouriteCharacters } = useAppContext();
    const saveToFavourite = (item: ICharacter) => {
        let updatedList = favouriteCharacters.filter((f: ICharacter) => f.id !== item.id);
        setFavouriteCharacters(updatedList)
    }
    return (
        <>
            <Head onSearch={() => { }} />
            <div className="container mt-5">
                <h5>Favourite Characters</h5>
                <hr />
                <div className="d-flex flex-wrap">
                    {favouriteCharacters && favouriteCharacters.map((c: ICharacter, i: number) =>
                        <div style={{ width: '20%' }}
                            key={c.name}
                        >
                            <CharacterCard character={c} onFavouriteClick={() => saveToFavourite(c)} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Favourite