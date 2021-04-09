import React from "react";

function EditForm(props) {
  return (
    <div className="bg-dark" id="container">
      <div className="form-group bg-dark">
        <h2 className="text-warning">Update Your Profile</h2>
        <form className="text-warning" onSubmit={props.submit}>
          <div className="form-row">
            <div className="col-md-4 mb-3"></div>
          </div>
          <div className="form-row">
            <div className="col-md-2 mb-3">
              <label htmlFor="validationDefault01">First name</label>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                name="FirstName"
                placeholder="First name"
                onChange={props.update}
                defaultValue={props.currentUser.FirstName}
                required
              ></input>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="LastName">Last name</label>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                name="LastName"
                placeholder="Last name"
                onChange={props.update}
                defaultValue={props.currentUser.LastName}
                required
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-2 mb-3">
              <label htmlFor="Password">Password</label>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="password"
                className="form-control"
                name="Password"
                placeholder="Password"
                onChange={props.update}
              
                defaultValue=""
                required
              ></input>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="UserId">User Id</label>
            </div>

            <div className="col-md-4 mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" name="U">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="UserId"
                  placeholder="UserId/Email"
                  aria-describedby="inputGroupPrepend2"
                  disabled={true}
                  onChange={props.update}
                  defaultValue={props.currentUser.UserId}
                ></input>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-2 mb-3">
              <label htmlFor="Unit">Unit</label>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                name="Unit"
                placeholder="Unit No"
                required
                onChange={props.update}
                defaultValue={props.currentUser.Unit}
              ></input>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="City">City</label>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                name="City"
                placeholder="City"
                required
                onChange={props.update}
                defaultValue={props.currentUser.City}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-2 mb-3">
              <label htmlFor="Province">Province</label>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                name="Province"
                placeholder="Province"
                required
                onChange={props.update}
                defaultValue={props.currentUser.Province}
              ></input>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="Zip">Zip</label>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                name="Zip"
                placeholder="Zip"
                required
                onChange={props.update}
                defaultValue={props.currentUser.Zip}
              ></input>
            </div>
          </div>

          <button className="btn btn-warning" type="submit">
            UpdateProfile
          </button>
        </form>

        <img
          alt="img not avialable"
          src="https://mir-s3-cdn-cf.behance.net/projects/404/ae3afc101182005.Y3JvcCw5NjAsNzUwLDAsMTA0.png"
        />
      </div>
    </div>
  );
}

export default EditForm;
