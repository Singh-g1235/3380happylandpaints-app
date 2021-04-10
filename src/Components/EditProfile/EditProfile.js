import React, { useState, useEffect } from "react";
import { getUser, updateSignupUser } from "../../Services/SignupService";

import EditForm from "../EditForm/EditForm";

function EditProfile(props) {
  const [newUser, setNewUser] = useState();
  const [retrievedUser, setUser] = useState(null);
  const [userIcon, setUserIcon] = useState([]);

  useEffect(() => {
    refreshPage();
  }, []);

  function refreshPage() {
    getUser(props.id).then((json) => {
      setUser(json[0]);
      setNewUser(json[0]);
      //console.log(json[0]);
    });

    const url =
      "https://ui-avatars.com/api/?name=" +
      props.id +
      "&background=random&length=1&size=170";
    fetch(url).then((response) => setUserIcon(response));
  }

  function updateUser(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  }

  async function editProfile(e) {
    //prevent the default behaviour.
    e.preventDefault();

    console.log(newUser);
    const resp = await updateSignupUser(newUser);

    alert(resp.message);
  }

  return retrievedUser ? (
    <EditForm
      id={props.id}
      update={updateUser}
      currentUser={retrievedUser}
      submit={editProfile}
      icon={userIcon}
    />
  ) : (
    <div>
      <h2>Loading..</h2>
    </div>
  );
}

export default EditProfile;
