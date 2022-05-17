import React from 'react'
import { ICharacter } from '../interface/swapi.interface'

type Props = {
    character: ICharacter,
}
const CharacterProfile = ({ character }: Props) => {
    return (
        <div className="card mb-3 border-light"  >
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