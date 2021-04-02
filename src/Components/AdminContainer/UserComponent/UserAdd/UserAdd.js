import React from 'react'

function UserAdd(props) {
    // contains form to add user
    const {update,action} = props;
    return (
        <div className="col-sm-12 col-md-12 ">
        <h1>Add User</h1>
       
        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">User Id : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="UserId" onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Password : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Password" onChange={update} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">First Name : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="FirstName" onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Last Name : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="LastName" onChange={update} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Unit: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Unit" onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">City: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="City" onChange={update} /></div>

        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Zip : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Zip" onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Province: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Province" onChange={update} /></div>
        </div><br/>

        <button className="btn btn-warning text-dark" onClick={action}>Add User</button>
        </div>
    )
}

export default UserAdd
