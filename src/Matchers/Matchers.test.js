import { screen, render, within } from "@testing-library/react";
import Matchers from "./Matchers";

const toContainRole = (container, role, quantity = 1) => {
    const elements = within(container).queryAllByRole(role);

    if (elements.length === quantity) {
        return {
            pass: true
        }
    }

    return {
        passs: false,
        message: () => `Expected to find ${quantity} ${role} elements. Found ${elements.length} insted.`
    };
};

expect.extend({ toContainRole });

test('the form display two buttons', () => {
    render(<Matchers />);

    const form = screen.getByRole('form');

    // const buttons = within(form).getAllByRole('button');

    // expect(buttons).toHaveLength(2);

    expect(form).toContainRole('button', 2);
});
