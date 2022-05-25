
import Favourite from '../../pages/Favourite';
import { renderWithRouter } from '../test-utils';
import { } from '@testing-library/react';


describe('Favourite', () => {
    test('should render Favourite Page correctly', () => {
        const { asFragment } = renderWithRouter(<Favourite />);
        expect(asFragment).toMatchSnapshot();
    });
});

