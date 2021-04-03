import React from 'react'

function Order(props) {
    //this is where each item in order list is formed and linked to actions of edit and remove
    const {order,shipOrder} = props;
    return (
      
            <tr>
                        <td>{order.OrderId}</td>
                        <td>{order.UserId}</td>
                        <td>{order.OrderStatus}</td>

                        {(order.OrderStatus  !== "Completed") ? 
                        (<td><button className="btn btn-outline-warning my-2 my-sm-0 text-dark" onClick={shipOrder} value={order.OrderId}>Ship Order</button></td>) 
                        :(<td></td>)
                    }
                        
            </tr> 
       
    )
}

export default Order
