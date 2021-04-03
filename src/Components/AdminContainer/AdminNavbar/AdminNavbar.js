import React from 'react'
import  './AdminNavbarCss.css'
function AdminNavbar(props) {
    const {toggleNav} = props;
    return (
        // Navbar for admin which contains three buttons to navigate to product, order and user respectively
        <nav className="navbar ">
        <div className="form-inline">
        <button className="btn btn-outline-warning text-dark mx-4 mx-sm-0" type="submit" value="product" onClick={toggleNav}>Product</button>
        <button className="btn btn-outline-warning text-dark mx-4 mx-sm-0" type="submit" value="order" onClick={toggleNav}>Order</button>
        <button className="btn btn-outline-warning text-dark mx-4 mx-sm-0" type="submit" value="user" onClick={toggleNav}>User</button>
        <button className="btn btn-outline-warning text-dark mx-4 mx-sm-0" type="submit" value="vendor" onClick={toggleNav}>New Supply</button>
        </div>
      </nav>
           

    )
}

export default AdminNavbar
