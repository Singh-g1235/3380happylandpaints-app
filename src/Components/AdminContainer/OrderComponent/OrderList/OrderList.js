import React,{useState,useEffect} from 'react'
import Order from '../Order/Order'
import SearchBar from '../SearchBar/SearchBar'
import {getOrdersService,getOrderByIdService,updateOrderService} from '../../../../Services/AdminServices'

function OrderList(props) {
    // It contains everything related to Admin Order Operations such as view orders in inventory, add, remove and update order
    const [orderList,setOrderList] = useState([]);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);
    const [keyword,setKeyword] = useState("");

    useEffect(()=>{
        refreshOrders();
    },[])

    function refreshOrders() {
        setLoading(true);
        getOrdersService()
        .then(json => {
            let jsonList =[];
            json.forEach(item => {
                let order = {
                    "OrderId":item.OrderId,
                    "UserId":item.UserId,
                    "OrderAmount":item.OrderAmount,
                    "OrderStatus":item.OrderStatus,
                }
                jsonList.push(order);
            })
            
            setOrderList(jsonList);
            setLoading(false);
        }).catch(err => 
            {
                console.log(err);
                setError(err);
            })
    }


    async function shipOrder(e) {
        await updateOrderService(e.target.value);
        refreshOrders();
        
    }

    function updateKeyword(e) {
        
        setKeyword(
            e.target.value
        ) 
    }

    function search(e) {
        setLoading(true);
        if(keyword.trim() !== ""){
            getOrderByIdService(keyword)
        .then(json => {
            let jsonList =[];
                let order = {

                    "OrderId":json.OrderId,
                    "UserId":json.UserId,
                    "OrderAmount":json.OrderAmount,
                    "OrderStatus":json.OrderStatus

                }
                jsonList.push(order);
            
            
            setOrderList(jsonList);
            setLoading(false);
        }).catch(err => 
            {
                console.log(err);
                setLoading(false);
                setError(err);
            })
        } else {
            refreshOrders();
        }
        
    }
    



    if (loading) return (<div className="alert alert-info">Loading.....</div>)
    if (error) return (<div className="alert alert-danger">Error while loading....</div>)
    return (
        <div className="row border-dark ">

      
        <div className="col-sm-12 col-md-12 ">
        <br/><br/>
            <SearchBar keyword={keyword} update={updateKeyword} search={search}/>
            <br/>
        <table className="table">
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>User Id</th>
                    <th>Order Status</th>
                    <th>Ship Order</th>
              
                </tr>

            </thead>
            <tbody>
                {orderList.map((order, key) => (
                    <Order order={order} key={key} shipOrder={shipOrder}/>
                 
                ))

                }
            </tbody>
        </table>
        </div>
        

      
    </div>
    )
}

export default OrderList
