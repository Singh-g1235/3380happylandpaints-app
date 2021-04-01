export async function getResponse(userData) {
  const check = JSON.stringify(userData);
  return fetch(`${process.env.REACT_APP_API_BASE_URL}login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: check,
  }).then((response) => response.json());
}
