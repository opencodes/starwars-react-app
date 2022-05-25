
import { renderWithRouter } from '../test-utils';
import CharacterList from "../../components/CharacterList";
import { screen, fireEvent } from '@testing-library/react';

describe('Page', () => {
  test('should render Page correctly', () => {
    const { asFragment } = renderWithRouter(<CharacterList />);
    expect(asFragment).toMatchSnapshot();
  });
});
