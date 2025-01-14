
const UserList = ({userList}) => {
    const renderedUser = userList.map(user=>{
        return(
            <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        )
    })

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody data-testid={'users'}>
                {renderedUser}
            </tbody>
        </table>
    )
   
}

export default UserList;