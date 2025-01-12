import { render, screen } from '@testing-library/react';
import MoreNames from './MoreNames';

test('show email and name input fields', () => {
  render(<MoreNames/>);

  const nameInput = screen.getByLabelText(/name/i);
  // const emailInput = screen.getByLabelText(/email/i);

  // or method
  const emailInput = screen.getByRole('textbox', {name: /email/i});


  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
});