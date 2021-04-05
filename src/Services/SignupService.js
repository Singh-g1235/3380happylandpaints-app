export async function addSignupUser(userData) {
    const user = JSON.stringify(userData);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: user,
    }).then((response) => response.json());
  }
  export async function getUser(uid) {
    const id = JSON.stringify({"UserId":uid});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}signup/getUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: id,
    }).then((response) => response.json());
  }

  export async function updateSignupUser(userData) {
    const user = JSON.stringify(userData);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}signup/updateUser`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: user,
    }).then((response) => response.json());
  }