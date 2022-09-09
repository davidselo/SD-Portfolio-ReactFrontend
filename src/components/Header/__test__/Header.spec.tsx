import React from 'react';
import {render} from '@testing-library/react';
import Header from '../index';

describe('Header component', () => {
    it('should match test snapshot', () => {
        const {container} = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});
