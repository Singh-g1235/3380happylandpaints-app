import React, {useState, useEffect} from 'react'
import CartDisplay from '../CartDisplay/CartDisplay';
import {getCart, deleteProductService,cartCheckout,addProductToOrders} from '../../Services/cartService'


function ViewCart(props) {

    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);

    function refreshPage(){
        setLoading(true);
      
        getCart()
            .then(res => {
                setCart(res);
                console.log(cart)
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err);
            })
    }
    console.log(cart)

    useEffect(() => {
        refreshPage();
    }, [])

    async function deleteProduct(e) {
       
        
        await deleteProductService(e);
        console.log("in delete")
        refreshPage();
    }

    //checkout

    async function checkout(e) {
        await addProductToOrders({cart:cart,UserId:props.id});
        await cartCheckout(e);
        console.log("in checkout")
        refreshPage();
    }

    return (
        <div>
            <h1><strong>Welcome to Your Cart </strong> </h1>
            <br></br>
            <CartDisplay deleteProduct={deleteProduct} 
            checkout={checkout}
            cart={cart}/>
            
        </div>
    )
}

export default ViewCart
