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

                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err);
            })
    }

    useEffect(() => {
        refreshPage();
    }, [])

    async function deleteProduct(e) {
       
        
        await deleteProductService(e);
        refreshPage();
    }

    //checkout

    async function checkout(e) {
        await addProductToOrders(cart);
        await cartCheckout(e);

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
