export async function addSignupUser(userData) {
    const user = JSON.stringify(userData);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: user,
    }).then((response) => response.json());
  }
  