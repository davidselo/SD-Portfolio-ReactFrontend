import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Header from '../index';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

describe('Header component', () => {
    test('Should match test snapshot', () => {
        const {container} = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});
describe('MenuIcon component', () => {
    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(
            <MenuIcon
                onClick={handleClick}
                data-testid="header--burger-menu-icon"
            />,
        );
        const element = screen.getByTestId('header--burger-menu-icon');
        fireEvent.click(element);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
describe('ChevronRightIcon component', () => {
    test('calls onClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(
            <ChevronRightIcon
                onClick={handleClick}
                data-testid="header--chevron-icon"
            />,
        );
        const element = screen.getByTestId('header--chevron-icon');
        fireEvent.click(element);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
