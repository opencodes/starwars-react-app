import React, { useState } from 'react'
import { Link } from 'react-router-dom'

type Props = {
    onSearch: (search: string) => void
}

const Head = ({ onSearch }: Props) => {
    const [search, setSearch] = useState('')
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link to={`/`} className="navbar-brand" >Star War</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={`/favourite`} >
                                Favourite
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search"
                            placeholder="Search" aria-label="Search"
                            data-testid="searchinput"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="button"
                            data-testid="searchbtn"
                            onClick={() => onSearch(search.trim())}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Head