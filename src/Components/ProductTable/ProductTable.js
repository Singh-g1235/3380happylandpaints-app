import React from 'react'
import ProductRecord from '../ProductRecord/ProductRecord';
function ProductTable(props) {
    return (
      
        

        <div class="accordion" id="accordionExample">
              <h1><strong>The Right Paint and Stain for your Project</strong></h1>
             
             
             {
                    (props.inventory).map((ele, i) =>
                 
                    <ProductRecord viewCart={props.viewCart} addToCart={props.addToCart} 
                    productId={ele.ProductId} productAmount={ele.ProductAmount} productQuantity={ele.ProductQuantity} 
                    productDescription={ele.ProductDescription} productName={ele.ProductName}  />   
                    )
                  
                
             }
             
        </div>

    )
}

export default ProductTable
