import React from 'react'
import { ICharacter } from '../interface/swapi.interface'

type Props = {
    character: ICharacter,
}

// o list the films that the character has appeared in
// o list the starships that the character has piloted
// o provide the ability to add the character to the favourites list if they aren’t
// already on it
const CharacterProfile = ({ character }: Props) => {
    return (
        <div className="card mb-3"  >
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <dl  >
                            <dt className="col-sm-3">Hair Color</dt>
                            <dd className="col-sm-9">{character.hair_color}</dd>
                            <dt className="col-sm-3">Eye Color</dt>
                            <dd className="col-sm-9">{character.eye_color}</dd>
                            <dt className="col-sm-3">Gender</dt>
                            <dd className="col-sm-9">{character.gender}</dd>
                            <dt className="col-sm-3">Home Planet</dt>
                            <dd className="col-sm-9">{character.homeworld}</dd>
                        </dl>
                    </div>

                </div>
                <div className="col-md-4">
                    <img src={character.imgURL} className="img-fluid rounded-start" alt={character.name} />
                </div>
            </div>
        </div>
    )
}

export default CharacterProfile