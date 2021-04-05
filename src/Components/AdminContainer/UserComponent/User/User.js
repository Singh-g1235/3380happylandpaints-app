import React from 'react'

function User(props) {
    //this is where each item in user list is formed and linked to actions of edit and remove
    const {user,renderEditUserForm,deleteUser} = props;
    return (
      
            <tr>
                        <td>{user.UserId}</td>
                        <td>{user.FirstName}</td>
                        <td>{user.LastName}</td>
                        <td><button className="btn btn-outline-warning my-2 my-sm-0 text-dark" onClick={renderEditUserForm} value={user.UserId}>Edit</button></td>
                        <td><button className="btn btn-outline-warning my-2 my-sm-0 text-dark" onClick={deleteUser} value={user.UserId}>Remove</button></td>
            </tr> 
       
    )
}

export default User
