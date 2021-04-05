import React from 'react'

function UserOrders(props) {
    return (
        <div>
            <table className="table table-hover">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Cancel Order</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, key) => (
            <tr key={key}>
              <td>{item.ProductDetails[0].productName}</td>
              <td>{item.ProductDetails[0].productQuantity}</td>
              <td>${item.ProductDetails[0].productAmount}</td>
              <td>${item.OrderAmount}</td>
              
              <td>
                <button
                 disabled={true}
                  className={
                    
                     "btn-warning btn"
                  
                  }

                >
                  {item.OrderStatus}
                </button>
              </td>
              <td>
                <button

                onClick={
                    (e)=>{
                        props.cancelOrder(item);
                    }
                }
                  className={
                    
                     "btn-danger btn"
                  
                  }

                >
                  Cancel Order
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        </div>
    )
}

export default UserOrders
