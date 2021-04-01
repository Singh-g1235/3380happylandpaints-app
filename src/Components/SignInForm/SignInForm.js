import React from "react";
import "./SignInFormCss.css";
function SignInForm(props) {
  return (
    <div className="container bg-light">
    
    <form class="form-group  ">
      <div class="form-row">
        <div class="col-md-2 mb-3">
          
          <label for="validationDefault01">First name</label>
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            id="FirstName"
            placeholder="First name"
            onChange={props.update}
            required
          ></input>
        </div>
        <div class="col-md-2 mb-3">
          
        <label for="LastName">Last name</label>
        </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            id="LastName"
            placeholder="Last name"
            onChange={props.update}
            required
          ></input>
        </div>
      </div>
      <div class="form-row">
      <div class="col-md-2 mb-3">
      <label for="Password">Password</label>
      </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            id="Password"
            placeholder="Last name"
            onChange={props.update}
            required
          ></input>
        </div>
        <div class="col-md-2 mb-3">
          
          <label for="UserId">User Id</label>
          </div>
        
        <div class="col-md-4 mb-3">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="U">
                @
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              id="UserId"
              placeholder="UserId/Email"
              aria-describedby="inputGroupPrepend2"
              required
              onChange={props.update}
            ></input>
          </div>
        </div>
      </div>
      <div class="form-row">
      <div class="col-md-2 mb-3">
          
          <label for="Unit">Unit</label>
          </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            id="Unit"
            placeholder="Unit No"
            required
            onChange={props.update}
          ></input>
        </div>
        <div class="col-md-2 mb-3">
          
          <label for="City">City</label>
          </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            id="City"
            placeholder="City"
            required
            onChange={props.update}
          ></input>
          
        </div>
        </div>
        <div className="form-row">
        <div class="col-md-2 mb-3">
          
          <label for="Province">Province</label>
          </div>
        <div class="col-md-4 mb-3">
          <input
            type="text"
            class="form-control"
            id="Province"
            placeholder="Province"
            required
            onChange={props.update}
          ></input>
        </div>
        <div class="col-md-2 mb-3">
          
          <label for="Zip">Zip</label>
          </div>
        <div class="col-md-4 mb-3">
        
          <input
            type="text"
            class="form-control"
            id="Zip"
            placeholder="Zip"
            required
            onChange={props.update}
          ></input>
        </div>
        </div>
       
      
      <button class="btn btn-primary">
        Create Profile
      </button>
    </form>
    
    </div>
  );
}

export default SignInForm;
