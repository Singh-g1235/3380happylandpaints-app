import React, { useEffect, useState } from "react";
import { getOrders, deleteUserOrder } from "../../Services/editOrders";
import UserOrders from "../UserOrders/UserOrders";

function UserOrdersContainer(props) {

    const [newOrder, setOrders] = useState([]);

    useEffect(() => {

        refreshPage();
         
        }, []);

        function refreshPage()
        {
            getOrders(props.id).then((json)=>{

             
                 setOrders(json);
                
            });
        }

    const cancelOrder=(item)=>{

        deleteOrder(item);

    }

    async function deleteOrder(item)
    {
        const resp=await deleteUserOrder({UserId:item.UserId,OrderId:item.OrderId});
        refreshPage();
    }
    
    return (
        <div>
            <h1 className="text-success">Your Orders</h1>
            <UserOrders items={newOrder} cancelOrder={cancelOrder}/>
        </div>
    )
}

export default UserOrdersContainer
