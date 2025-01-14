import { render, screen } from '@testing-library/react';
import ColorList from './ColorList';

test('getBy, queryBy, findBy, finding 0 elements', async () => {
    render(<ColorList />);
    expect(
        () => screen.getByRole('textbox')
    ).toThrow();

    expect(
        screen.queryByRole('textbox')
    ).toEqual(null);

    let errorThrown = false;
    try{
       await screenfindByRole('textbox');
    }catch(error){
        errorThrown = true;
    }
    expect(errorThrown).toEqual(true);

    // screen.findByRole('textbox');
})

test('getBy, queryBy, findBy, finding 1 elements', async () => {
    render(<ColorList />);
    expect(
        screen.getByRole('list')
    ).toBeInTheDocument();
    expect(
        screen.queryByRole('list')
    ).toBeInTheDocument();
    expect(
        await screen.findByRole('list')
    ).toBeInTheDocument();
})

test('getBy, queryBy, findBy, finding > 1 elements', async () => {
    render(<ColorList />);
    expect(
        () => screen.getByRole('listitem')
    ).toThrow();

    expect(
       () => screen.queryByRole('listitem')
    ).toThrow();

    let errorThrown = false;
    try{
       await screenfindByRole('listitem');
    }catch(error){
        errorThrown = true;
    }
    expect(errorThrown).toEqual(true);
})

test('getAllBy, queryAllBy, findAllBy, finding > 1 elements', async () => {
    render(<ColorList />);
    expect(
        screen.getAllByRole('listitem')
    ).toHaveLength(3);

    expect(
       screen.queryAllByRole('listitem')
    ).toHaveLength(3);

    expect(
        await screen.findAllByRole('listitem')
    ).toHaveLength(3);

})

test('faver using getBy to prove an element existd', () => {
    render(<ColorList />);

    const element = screen.getByRole('list');

    expect(element).toBeInTheDocument();
})

test('faver using queryBy to prove an element does not existd', () => {

    render(<ColorList />);

    const element = screen.queryByRole('textbox');

    expect(element).not.toBeInTheDocument();
});