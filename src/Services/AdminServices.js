// Services for product begin
export async function getProductsService() {
    // retrieve product list
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/products`)
    .then(response => response.json())
}


export async function getProductByIdService(productId) {
    //search product list by productId
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/product/${productId}`)
    .then(response => {console.log(response); return response.json();})
}


export async function addProductService(product) {
    //add product to database
    let addedProduct = product;
    const newProduct = JSON.stringify(addedProduct);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/product/`,{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: newProduct
    })
    .then(response => response.json())
}

export async function updateProductService(product) {
    //update product in database

    let updatedProduct = product;
    const newProduct = JSON.stringify(updatedProduct);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/product/`,{
        method: 'PUT',
        headers: {"Content-Type":"application/json"},
        body: newProduct
    })
    .then(response => response.json())
}

export async function deleteProductService(productId) {
    //remove product from database
    const productToRemove = JSON.stringify({"ProductId":productId});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/product/`,{
        method: 'DELETE',
        headers: {"Content-Type":"application/json"},
        body: productToRemove
    })
    .then(response => response.json())
}

// Services for product ends




//Services for User begin
export async function getUsersService() {
    // retrieve user list
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/users`)
    .then(response => response.json())
}


export async function getUserByIdService(userId) {
    //search user list by userId
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/user/${userId}`)
    .then(response => {console.log(response); return response.json();})
}


export async function addUserService(user) {
    //add user to database
    let addedUser = user;
    const newUser = JSON.stringify(addedUser);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/user/`,{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: newUser
    })
    .then(response => response.json())
}

export async function updateUserService(user) {
    //update user in database

    let updatedUser = user;
    const newUser = JSON.stringify(updatedUser);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/user/`,{
        method: 'PUT',
        headers: {"Content-Type":"application/json"},
        body: newUser
    })
    .then(response => response.json())
}

export async function deleteUserService(userId) {
    //remove user from database
    const userToRemove = JSON.stringify({"UserId":userId});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/user/`,{
        method: 'DELETE',
        headers: {"Content-Type":"application/json"},
        body: userToRemove
    })
    .then(response => response.json())
}

//Services for user end



//Services for Order begin
export async function getOrdersService() {
    // retrieve order list
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/orders`)
    .then(response => response.json())
}


export async function getOrderByIdService(orderId) {
    //search order list by orderId
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/order/${orderId}`)
    .then(response => {console.log(response); return response.json();})
}


export async function updateOrderService(orderId) {
    //update order in database
    const newOrder = JSON.stringify({"OrderId":orderId});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/order/`,{
        method: 'PUT',
        headers: {"Content-Type":"application/json"},
        body: newOrder
    })
    .then(response => response.json())
}


//Services for order end

