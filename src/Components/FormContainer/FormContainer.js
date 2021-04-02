import React, { useState } from "react";
import { addLoginUser, getResponse } from "../../Services/loginService";
import { addSignupUser } from "../../Services/SignupService";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";
import SignupForm from "../SignupForm/SignupForm";

function FormContainer() {
  const [newUser, setNewUser] = useState();
  const [render, setNewRender] = useState("Login");
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  function updateUser(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }

  async function signup(e) {
    e.preventDefault();
   // console.log(newUser);
   setIsLoading(true);
     const resp=await addSignupUser(newUser);

     const res=await addLoginUser({UserId:newUser.UserId,Password:newUser.Password,Role:"customer"});

     //if the user is inserted correctly in the collections
     if (res.auth && resp) {
      console.log("success user token is"+res.token);
      history.push("/home_page");
    } else {
      setIsLoading(false);
    }

  }

  const action=(res)=>{

    setNewRender(res);

    console.log(render);

  }

  async function submit(e) {
    //when user clicks login button
    setIsLoading(true);
    //console.log(newUser);
    const resp = await getResponse(newUser);

    //check if we passed the authenitcation of data with our database.
    if (resp.auth) {
      console.log("success");
      console.log(resp.token);
      if(newUser.Role ==="customer")
      {
        history.push("/home_page");
      }
      else{
        history.push("/admin_page");

      }
    } else {
      setIsLoading(false);
    }

    // refreshPage();
  }
  return (
    <div>
      {render === "Login"?(
      <LoginForm update={updateUser} status={isLoading} submit={submit} render={action}/>):(
      <SignupForm update={updateUser} submit={signup} />)
      }
    </div>
  );
}

export default FormContainer;
