import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

const renserComponet = () => {
    const users = [
        {name: 'sam', email: 'sam@sam.com'},
        {name: 'jane', email: 'jane@jane.com'}
    ]

    render(<UserList userList={users}/>);

    return {
        users
    };
}

test('render one row per user', () => {
    const users = [
        {name: 'sam', email: 'sam@sam.com'},
        {name: 'jane', email: 'jane@jane.com'}
    ]

    const {container} = render(<UserList userList={users}/>);

    // const noOfRows = screen.logTestingPlaygroundURL();
    // const rows = screen.getAllByRole('row');
    // const rows = within(screen.getByTestId('users')).getAllByRole('row');

    const rows = container.querySelectorAll('tbody tr');
    console.log(rows)

    expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
    const users = [
        {name: 'sam', email: 'sam@sam.com'},
        {name: 'jane', email: 'jane@jane.com'}
    ]

    render(<UserList userList={users}/>);

    for(let user of users){
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
})