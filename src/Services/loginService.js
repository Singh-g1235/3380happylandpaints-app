export async function getResponse(userData) {
  const check = JSON.stringify(userData);
  return fetch(`${process.env.REACT_APP_API_BASE_URL}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: check,
  }).then((response) => response.json());
}

export async function addLoginUser(userData) {
  const user = JSON.stringify(userData);
  return fetch(`${process.env.REACT_APP_API_BASE_URL}login/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: user,
  }).then((response) => response.json());
}
