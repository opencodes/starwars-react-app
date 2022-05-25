import Head from '../../../pages/components/Head';
import { renderWithRouter } from "../../test-utils";
import { fireEvent, screen } from '@testing-library/react';

describe('Head', () => {
    test('should render Head component correctly', () => {
        const props = {
            onSearch: jest.fn(),
        }
        const { asFragment } = renderWithRouter(<Head {...props} />);
        expect(asFragment).toMatchSnapshot();
    });
    test('should match input value on change event', () => {
        const props = {
            onSearch: jest.fn(),
        }
        renderWithRouter(<Head {...props} />);
        const input = screen.getByTestId('searchinput')
        const searchbtn = screen.getByTestId('searchbtn')
        fireEvent.change(input, { target: { value: 'Luke' } })
        fireEvent.click(searchbtn)
        expect(input.value).toEqual("Luke");
    });
});

