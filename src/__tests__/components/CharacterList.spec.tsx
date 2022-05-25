
import { renderWithRouter } from '../test-utils';
import CharacterList from "../../components/CharacterList";

describe('Page', () => {
  test('should render Page correctly', () => {
    const { asFragment } = renderWithRouter(<CharacterList />);
    expect(asFragment).toMatchSnapshot();
  });
});
