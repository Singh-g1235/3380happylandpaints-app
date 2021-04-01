import React, { useState } from "react";
import { getResponse } from "../../Services/loginService";
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
      [e.target.id]: e.target.value,
    });
  }

  async function signup() {
   // console.log(newUser);
   setIsLoading(true);
     const res=await addSignupUser(newUser);
     if (res) {
      console.log("success");
      history.push("/home_page");
    } else {
      setIsLoading(false);
    }

   // console.log(res);
  }

  const action=(res)=>{

    setNewRender(res);

    console.log(render);

  }

  async function submit(e) {
    setIsLoading(true);
    //console.log(newUser);
    const resp = await getResponse(newUser);

    if (resp) {
      console.log("success");
      history.push("/home_page");
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
