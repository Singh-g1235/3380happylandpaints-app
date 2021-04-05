import React,{useState,useEffect} from 'react'
import ProductList from '../ProductComponent/ProductList/ProductList'
import OrderList from '../OrderComponent/OrderList/OrderList'
import UserList from '../UserComponent/UserList/UserList'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import VendorList from '../VendorComponent/VendorList/VendorList'


function AdminMain(props) {
    // it is the container of all the admin module and links to admin Navbar,Product Operations, Order Operations and User Operations
    const [product,setProduct] = useState(true);
    const [user,setUser] = useState(false);
    const [order,setOrder] = useState(false);
    const [vendor,setVendor] = useState(false);
    
    useEffect(()=>{})

    function toggleNav(e) {
        if(e.target.value === "product"){
            setProduct(true);
            setOrder(false);
            setUser(false);
            setVendor(false);
        } else if (e.target.value === "order"){
            setProduct(false);
            setOrder(true);
            setUser(false);
            setVendor(false);
        }  else if (e.target.value === "user"){
            setProduct(false);
            setOrder(false);
            setUser(true);
            setVendor(false);
        }
        else if (e.target.value === "vendor"){
            setProduct(false);
            setOrder(false);
            setUser(false);
            setVendor(true);
        }
    }

    if (order) return (<div className="container col-md-12">
            <AdminNavbar toggleNav={toggleNav} />
            <br/><br/>
        <OrderList />
    </div>)

    if (user) return (<div className="container col-md-12">
     
        <AdminNavbar toggleNav={toggleNav} />
            <br/><br/>
        <UserList />
    </div>)
    if (product) return (<div className="container col-md-12">
           <AdminNavbar toggleNav={toggleNav} />
            <br/><br/>
           <ProductList />
        </div>)
     if (vendor) return (<div className="container col-md-12">
     <AdminNavbar toggleNav={toggleNav} />
      <br/><br/>
     <VendorList />
  </div>)
    return (
        <div className="alert alert-info">
            Welcome Admin... Please hold on for a while
        </div>
    )
}

export default AdminMain
