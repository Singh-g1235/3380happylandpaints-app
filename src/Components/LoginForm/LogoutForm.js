import React from "react";
import { useHistory } from "react-router-dom";

function LogoutForm(props) {
  const history = useHistory();

  function logout(e) {
    //clear the token stored in the localstorage to end seesion.
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="container bg-dark ">
      <h1>props.id</h1>
      <div className="mt-200">
        <h2 className="text-warning">{props.id}</h2>
        <h2 className="text-warning">Click the button to Log Out</h2>
        <button className="btn-danger btn" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default LogoutForm;
