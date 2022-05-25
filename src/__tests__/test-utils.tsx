import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { mockCharacterResponse } from '../__mock__/mockCharacter';


interface IUtilProps {
    route?: {
        pathname: string;
        search: string;
        hash: string;
        state: { from: string };
    };
    userState?: any;
    renderOptions?: any;
    theme?: any;
}
const renderWithRouter = (
    ui: React.ReactElement,
    options?: IUtilProps
): RenderResult => {
    const {
        renderOptions = {},
        route = {
            pathname: '/',
            search: '',
            hash: 'true',
            state: { from: '/login' },
        },
    } = options || {};

    let context = {
        favouriteCharacters: mockCharacterResponse.results,
        setFavouriteCharacters: jest.fn(),
        characters: mockCharacterResponse,
        setCharacters: jest.fn(),
        films: {},
        setFilms: jest.fn(),
        planets: {},
        setPlanets: jest.fn(),
        starships: {},
        setStarships: jest.fn(),
    }
    return render(
        <AppContext.Provider value={context}>
            <MemoryRouter basename={route?.pathname} initialEntries={[route]}>
                {ui}
            </MemoryRouter>
        </AppContext.Provider >,
        { ...renderOptions }
    );
};

interface Props {
    title: string;
}

const TestUtilSampleComponent = ({ title }: Props): JSX.Element => {
    return <div>{title}</div>;
};

describe('TestUtilSampleComponent', () => {
    test('should render DashboardContent correctly', () => {
        renderWithRouter(<TestUtilSampleComponent title="Title" />);
        expect(screen.getAllByText('Title')).toHaveLength(1);
    });
});

export * from '@testing-library/react';
export { renderWithRouter };
