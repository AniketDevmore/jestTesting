import  { render, screen } from '@testing-library/react';
import IconButtons from './IconButtons';

test('Find element based on label', () => {
    render(<IconButtons/>);

    const signIn = screen.getByLabelText('Sign in');
    // const signOut = screen.getByLabelText('Sign out');
    // Or method
    const signOut = screen.getByRole('button', {name: /Sign out/i});

    expect(signIn).toBeInTheDocument();
    expect(signOut).toBeInTheDocument();
})