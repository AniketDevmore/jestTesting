import  { render, screen } from '@testing-library/react';
import OtherTag from './OtherTag';

test('Cnat find elements by role', async () => { 
    render(<OtherTag />);

    const roles = [
        // 'link',
        'button',
        'contentinfo',
        'heading',
        'banner',
        'img',
        'checkbox',
        'spinbutton',
        'radio',
        'textbox',
        'listitem',
        'list'
    ];

    for (let role of roles){
        const el = await screen.getByRole(role);

        expect(el).toBeInTheDocument();
    }
 })