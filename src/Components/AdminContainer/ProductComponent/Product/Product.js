import React from 'react'

function Product(props) {
    //this is where each item in product list is formed and linked to actions of edit and remove
    const {product,renderEditProductForm,deleteProduct} = props;
    return (
      
            <tr>
                        <td>{product.ProductId}</td>
                        <td>{product.ProductName}</td>
                        <td>{product.ProductQuantity}</td>
                        <td><button className="btn btn-outline-warning my-2 my-sm-0 text-dark" onClick={renderEditProductForm} value={product.ProductId}>Edit</button></td>
                        <td><button className="btn btn-outline-warning my-2 my-sm-0 text-dark" onClick={deleteProduct} value={product.ProductId}>Remove</button></td>
            </tr> 
       
    )
}

export default Product
