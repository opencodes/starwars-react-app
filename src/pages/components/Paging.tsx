import React from 'react'
import { useAppContext } from '../../context/AppContext';

type Props = {
    goToPage: (url: string) => void
}

const Paging = ({ goToPage }: Props) => {
    const { characters } = useAppContext();

    const previousClass = !characters?.previous ? 'disabled' : '';
    const nextClass = !characters?.next ? 'disabled' : '';
    const pagingArr = () => {
        let l = Math.ceil((characters?.count || 1) / 10);
        let paging = [];
        for (let i = 1; i <= l; i++) {
            paging.push({
                page: i,
                url: `https://swapi.dev/api/people/?page=${i}`
            })
        }
        return paging;
    }


    return (
        <div className="container mt-3">
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end" data-testid="paginglist">
                    <li className={`page-item ${previousClass}`}>
                        <button className="page-link"
                            data-testid="previousBtn"
                            onClick={() => goToPage(characters?.previous || '')}>Previous</button>
                    </li>
                    {
                        pagingArr().map(p => (<li className="page-item" key={p.page} data-testid="pagingItem">
                            <button className="page-link" onClick={() => goToPage(p.url)}>{p.page}</button>
                        </li>))
                    }
                    <li className={`page-item ${nextClass}`}
                    >
                        <button className="page-link"
                            data-testid="nextBtn"
                            onClick={() => goToPage(characters?.next || '')} >Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Paging