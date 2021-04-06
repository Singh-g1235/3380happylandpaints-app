import React from 'react'

function UserAdd(props) {
    // contains form to add user
    const {update,action} = props;
    return (
        <div className="col-sm-12 col-md-12 ">
        <h1>Add User</h1>
        <form  onSubmit={action} action="#">
        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">User Id : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="UserId"  required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Password : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Password"  required onChange={update} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">First Name : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="FirstName"  required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Last Name : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="LastName"  required onChange={update} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Unit: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Unit"  required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">City: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="City"  required onChange={update} /></div>

        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Zip : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Zip"  required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Province: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="Province"  required onChange={update} /></div>
        </div><br/>

        <button className="btn btn-warning text-dark" type="submit">Add User</button>
        </form>
        </div>
    )
}

export default UserAdd
