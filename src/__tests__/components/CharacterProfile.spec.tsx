

import { mockCharacter } from '../../__mock__/mockCharacter';
import { renderWithRouter } from '../test-utils';
import CharacterProfile from '../../components/CharacterProfile';

describe('Page', () => {
    test('should render Page correctly', () => {
        const props = {
            character: mockCharacter,
            onFavouriteClick: jest.fn(),
            disableFav: true
        }
        const { asFragment } = renderWithRouter(<CharacterProfile {...props} />);
        expect(asFragment).toMatchSnapshot();
    });
});


