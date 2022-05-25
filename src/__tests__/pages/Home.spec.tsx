import Home from '../../pages/Home';
import { renderWithRouter } from '../test-utils';

describe('Page', () => {
    test('should render Page correctly', () => {
        const { asFragment } = renderWithRouter(<Home />);
        expect(asFragment).toMatchSnapshot();
    });
});

