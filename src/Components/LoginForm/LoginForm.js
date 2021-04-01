import React from 'react'
import { Link } from "react-router-dom"
import "./LoginFormCss.css"

function LoginForm(props) {
    return (
        <div className="d-flex justify-content-center h-100">
       	<div className="card">
           <div className="card-header">
				<h3>Log In</h3>
				<div className="d-flex justify-content-end social_icon">
					{/* <span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span> */}
				</div>
                <div className="card-body">
                <form>

                <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" id="UserId"className="form-control" onChange={props.update} placeholder="username"></input>
						
					</div>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" id="Password" className="form-control" onChange={props.update} placeholder="password"></input>
					</div>

                     <div className="input-group form-group">
						<div className="input-group-prepend">
						<p className="text-warning">{(props.status)?" ":"Please enter valid credentials"}</p>


						</div>
					</div>
                    <div className="form-group">
						<input type="button" value="Login" onClick={props.submit} className="btn float-right login_btn"></input>
					</div>

                </form>
                <div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?<button onClick={(e)=>{props.render("Signup")}}>Sign Up</button>
				</div>
				<div className="d-flex justify-content-center">
					<a href="www.google.com">Forgot your password?</a>
				</div>
			</div>
                </div>
			</div>
        </div>     
        </div>
    )
}

export default LoginForm
