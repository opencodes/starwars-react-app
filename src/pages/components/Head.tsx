import React from 'react'

type Props = {}

const Head = (props: Props) => {
    return (
        <nav className="navbar bg-light">
            <div className="container">
                <a className="navbar-brand">Star War</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Head