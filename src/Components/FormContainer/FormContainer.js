import React,{ useState } from "react"
import { getResponse } from "../../Services/loginService";
import LoginForm from '../LoginForm/LoginForm'
import { useHistory } from "react-router-dom";

function FormContainer() {
    
    const [newUser, setNewUser] = useState();
    const history=useHistory();
    const [isLoading, setIsLoading] = useState(true);

function updateUser(e) {
    setNewUser({
      ...newUser,
      [e.target.id]: e.target.value,
    });
  }

  async function submit(e) {
    setIsLoading(true);
    //console.log(newUser);
  const resp=  await getResponse(newUser);

  if(resp)
  {
    console.log("success");
    history.push("/home_page");

  }
  else{
    setIsLoading(false);
  }

  // refreshPage();
  }
    return (
        <div>
            <LoginForm update={updateUser} status={isLoading} submit={submit}/>
        </div>
    )
}

export default FormContainer
