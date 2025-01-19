import { screen, render } from "@testing-library/react";
import DataForm from "./DataForm";

test('Selecting Different Elements', () => {
    render(<DataForm/>);

    const elements = [
        screen.getByRole('button'),
        screen.getByLabelText(/email/i),
        // screen.getByLabelText('Email'),
        screen.getByPlaceholderText('Red'),
        screen.getByText(/enter/i),
        // screen.getByText('Enter Data'),
        screen.getByDisplayValue('ani@yopmail.com'),
        screen.getByAltText('data'),
        screen.getByTitle("Click when ready to submit"),
        screen.getByTestId('image wrapper')
    ];

    for (let element of elements){
        expect(element).toBeInTheDocument();
    }
})