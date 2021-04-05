export async function getOrders(uid) {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}deleteOrders/${uid}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    }).then((response) => response.json());
  }

  export async function deleteUserOrder(userData) {
    const user = JSON.stringify(userData);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}deleteOrders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: user,
    }).then((response) => response.json());
  }