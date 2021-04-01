import React from "react";
import "./SignupFormCss.css";
function SignupForm(props) {
  return (
    <div className="container bg-dark">
      <div className="form-group bg-dark">
        <h2 className="text-warning">Create Your Profile</h2>
        <form className="text-warning">
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
                id="FirstName"
                placeholder="First name"
                onChange={props.update}
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
                id="LastName"
                placeholder="Last name"
                onChange={props.update}
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
                type="text"
                className="form-control"
                id="Password"
                placeholder="Password"
                onChange={props.update}
                required
              ></input>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="UserId">User Id</label>
            </div>

            <div className="col-md-4 mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="U">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="UserId"
                  placeholder="UserId/Email"
                  aria-describedby="inputGroupPrepend2"
                  required
                  onChange={props.update}
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
                id="Unit"
                placeholder="Unit No"
                required
                onChange={props.update}
              ></input>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="City">City</label>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                id="City"
                placeholder="City"
                required
                onChange={props.update}
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
                id="Province"
                placeholder="Province"
                required
                onChange={props.update}
              ></input>
            </div>
            <div className="col-md-2 mb-3">
              <label htmlFor="Zip">Zip</label>
            </div>
            <div className="col-md-4 mb-3">
              <input
                type="text"
                className="form-control"
                id="Zip"
                placeholder="Zip"
                required
                onChange={props.update}
              ></input>
            </div>
          </div>

          <button className="btn btn-warning" onClick={props.submit}>SignUp</button>
        </form>
     
          <img  alt="img not avialable" src="https://mir-s3-cdn-cf.behance.net/projects/404/ae3afc101182005.Y3JvcCw5NjAsNzUwLDAsMTA0.png" />
     
      </div>
    </div>
  );
}

export default SignupForm;
