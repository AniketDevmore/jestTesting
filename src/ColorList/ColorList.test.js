import { render, screen } from '@testing-library/react';
import ColorList from './ColorList';

test('getBy, queryBy, findBy, finding 0 elements', () => {
    render(<ColorList />);
    screen.getByRole('textbox');
})