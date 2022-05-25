import Details from '../../pages/Details';
import { renderWithRouter } from '../test-utils';

describe('Details', () => {
  test('should render Page correctly', () => {
    const { asFragment } = renderWithRouter(<Details />);
    expect(asFragment).toMatchSnapshot();
  });
});

