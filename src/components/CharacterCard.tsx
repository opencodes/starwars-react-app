import { Link } from 'react-router-dom'
import { ICharacter } from '../interface/swapi.interface'

type Props = {
    character: ICharacter,
    onFavouriteClick: (character: ICharacter) => void,
    disableFav?: boolean
}

const CharacterCard = ({ character, onFavouriteClick, disableFav }: Props) => {
    return (
        <div className="card"  >
            <img src={character.imgURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <div style={{ height: 50 }}>
                    <p > Gender : <span className="material-symbols-outlined">{character.gender !== 'n/a' ? character.gender : ''}</span></p>
                    <p >Home Planet : {character.homeworld}</p>
                </div>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <Link to={`/characters/${character.id}`} >
                        <button type="button"
                            className="card-link btn btn-primary" >View </button></Link>
                    <button type="button"
                        className={`card-link btn btn-warning ${disableFav ? 'disabled' : ''}`}
                        data-testid='favorite-btn'
                        onClick={() => onFavouriteClick(character)} >
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard