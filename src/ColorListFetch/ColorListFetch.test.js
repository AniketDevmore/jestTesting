import { render, screen } from '@testing-library/react';
import ColorListFetch from './ColorListFetch';

test('favor findBy or findAllBy when data fetching', async () => {  
render(<ColorListFetch/>);

const els = await screen.findAllByRole('listitem');

expect(els).toHaveLength(3);

});