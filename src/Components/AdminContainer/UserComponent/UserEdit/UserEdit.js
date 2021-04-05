import React from 'react'

function UserEdit(props) {
    //contains form to edit user
    const {update,action,currentUser} = props;
    return (
        <div className="col-sm-12 col-md-12 ">
        <h1>Edit User</h1>
        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">User Id : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="UserId" onChange={update} value={currentUser.UserId}/></div>
        <label  className="col-sm-3 col-form-label">Password : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Password" onChange={update} value={currentUser.Password}/></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">First Name : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="FirstName" onChange={update} value={currentUser.FirstName}/></div>
        <label  className="col-sm-3 col-form-label">Last Name : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="LastName" onChange={update} value={currentUser.LastName}/></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Unit: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Unit" onChange={update} value={currentUser.Unit}/></div>
        <label  className="col-sm-3 col-form-label">City: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="City" onChange={update} value={currentUser.City}/></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Zip : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Zip" onChange={update} value={currentUser.Zip}/></div>
        <label  className="col-sm-3 col-form-label">Province : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Province" onChange={update} value={currentUser.Province}/></div>
        </div><br/>

        <button className="btn btn-warning text-dark" onClick={action}>Edit User</button>
        </div>
       
    )
}

export default UserEdit
