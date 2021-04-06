// add products to cart


export async function addProductToCart(product) {

    let addedProduct = product;
    const newProduct = JSON.stringify(addedProduct);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cart`,{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: newProduct
    })
    .then(res => console.log(res))
}
export async function deleteProductService(productId) {
    //remove product from database
    const productToRemove = JSON.stringify({"ProductId":productId});
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cart/product`,{
        method: 'DELETE',
        headers: {"Content-Type":"application/json"},
        body: productToRemove
    })
    .then(response => response.json())
}

//shows data
export async function getProductByIdService(productId) {
    //search product list by productId
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/product/${productId}`)
    .then(response => {console.log(response); return response.json();})
}


// Services for product begin and retrieves data from product table
export async function getProductsService() {
    // retrieve product list
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cart/`)
    .then(response => response.json())
}

export async function updateProductService(product) {
    //update product in database

    let updatedProduct = product;
    const newProduct = JSON.stringify(updatedProduct);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}admin/product`,{
        method: 'PUT',
        headers: {"Content-Type":"application/json"},
        body: newProduct
    })
    .then(response => response.json())
}

//controlls cart items
export async function getCart(){
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cart/products`)
    .then(res => res.json());
}


export async function cartCheckout() {
    //remove product from database
    const cartRemove = JSON.stringify();
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cart/checkout`,{
        method: 'DELETE',
        headers: {"Content-Type":"application/json"},
        //body: cartRemove
    })
    .then(response => response.json())
}


export async function addProductToOrders(product) {

   
    const newProduct = JSON.stringify(product);

    console.log("in Json" + newProduct);
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cart/orders`,{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: newProduct
    })
    .then(res =>res.json())
}

