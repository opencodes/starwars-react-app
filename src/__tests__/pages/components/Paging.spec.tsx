import Paging from "../../../pages/components/Paging";
import { renderWithRouter } from "../../test-utils";
import { fireEvent, screen } from '@testing-library/react';


describe('Page', () => {
    test('should render Page correctly', () => {
        const props = {
            goToPage: jest.fn(),
        }
        const { asFragment } = renderWithRouter(<Paging {...props} />);
        expect(asFragment).toMatchSnapshot();
    });
    test('should trigger click event on next, prev, and item', () => {
        const props = {
            goToPage: jest.fn(),
        }
        renderWithRouter(<Paging {...props} />);
        const previousBtn = screen.getByTestId('previousBtn')
        fireEvent.click(previousBtn)
        const nextBtn = screen.getByTestId('nextBtn')
        fireEvent.click(nextBtn)
        const firstLink = screen.getByText('1')
        fireEvent.click(firstLink)
    });
});
