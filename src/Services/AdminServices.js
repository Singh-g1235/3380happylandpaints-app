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
