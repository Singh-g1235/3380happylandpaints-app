import React from 'react'
import ProductRecord from '../ProductRecord/ProductRecord';
function ProductTable(props) {
    return (
      
        

        <div class="accordion" id="accordionExample">
             
             
             
             {
                    (props.inventory).map((ele, key) =>
                 
                    <ProductRecord key={key} viewCart={props.viewCart} addToCart={props.addToCart} 
                    productId={ele.ProductId} productAmount={ele.ProductAmount} productQuantity={ele.ProductQuantity} 
                    productDescription={ele.ProductDescription} productName={ele.ProductName}  />   
                    )
                  
                
             }
             
        </div>

    )
}

export default ProductTable
