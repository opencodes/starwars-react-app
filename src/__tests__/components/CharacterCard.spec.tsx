import CharacterCard from '../../components/CharacterCard'
import { mockCharacter } from '../../__mock__/mockCharacter';
import { renderWithRouter } from '../test-utils';
import { screen, fireEvent } from '@testing-library/react';

describe('Page', () => {
    test('should render Page correctly', () => {
        const props = {
            character: mockCharacter,
            onFavouriteClick: jest.fn(),
            disableFav: true
        }
        const { asFragment } = renderWithRouter(<CharacterCard {...props} />);
        expect(asFragment).toMatchSnapshot();
    });
    test('should trigger onFavouriteClick event', () => {
        const props = {
            character: mockCharacter,
            onFavouriteClick: jest.fn(),
            disableFav: true
        }
        renderWithRouter(<CharacterCard {...props} />);
        const previousBtn = screen.getByTestId('favorite-btn')
        fireEvent.click(previousBtn)
    });
});
