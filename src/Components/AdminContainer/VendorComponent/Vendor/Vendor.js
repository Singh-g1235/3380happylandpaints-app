import React from 'react'

function Vendor(props) {
    //this is where each item in vendor list is formed and linked to action of approve supply
    const {vendor,approveSupply} = props;
    return (
      
            <tr>
                        <td>{vendor.ProductId}</td>
                        <td>{vendor.ProductName}</td>
                        <td>{vendor.ProductQuantity}</td>
                        <td><button className="btn btn-outline-warning my-2 my-sm-0 text-dark" onClick={approveSupply} value={vendor.ProductId}>Approve Supply</button></td>
                        
            </tr> 
       
    )
}

export default Vendor
