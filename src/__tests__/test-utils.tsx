import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


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
const renderWithReduxAndRouter = (
    ui: React.ReactElement,
    options?: IUtilProps
): RenderResult => {
    const {
        userState = {},
        renderOptions = {},
        theme = {},
        route = {
            pathname: '/',
            search: '',
            hash: 'true',
            state: { from: '/login' },
        },
    } = options || {};

    let context = {
        favouriteCharacters: [],
        setFavouriteCharacters: jest.fn(),
        characters: [],
        setCharacters: jest.fn(),
        films: [],
        setFilms: jest.fn(),
        planets: [],
        setPlanets: jest.fn(),
        starships: [],
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
        renderWithReduxAndRouter(<TestUtilSampleComponent title="Title" />);
        expect(screen.getAllByText('Title')).toHaveLength(1);
    });
});

export * from '@testing-library/react';
export { renderWithReduxAndRouter };
