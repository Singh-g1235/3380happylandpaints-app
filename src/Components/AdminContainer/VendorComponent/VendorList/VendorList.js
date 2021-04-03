import React,{useState} from 'react'
import * as XLSX from "xlsx";
import Vendor from '../Vendor/Vendor'
import {approveSupplyService} from '../../../../Services/AdminServices'
function VendorList(props) {

    const [vendorList,setVendorList] = useState([]);
    const [path,setPath] = useState();
    const [loading,setLoading] = useState(true);

    async function approveSupply(e) {
        let productToUpdate = vendorList.filter(vendorItem => vendorItem.ProductId === e.target.value)
        let newList = vendorList.filter(vendorItem => vendorItem.ProductId !== e.target.value);

        console.log(productToUpdate[0].ProductId);
        let newProduct = {
            "ProductId" : productToUpdate[0].ProductId,
            "ProductName" : productToUpdate[0].ProductName,
            "availableColours": productToUpdate[0].availableColours,
            "sheen":productToUpdate[0].sheen,
            "cleanup":productToUpdate[0].cleanup,
            "mpiRating":productToUpdate[0].mpiRating,
            "recommendedUse":productToUpdate[0].recommendedUse,
            "resinType":productToUpdate[0].resinType,
            "vocLevel":productToUpdate[0].vocLevel,
            "ProductQuantity":productToUpdate[0].ProductQuantity,
            "ProductAmount":productToUpdate[0].ProductAmount,
            "ProductImage":"",
            "ProductType":productToUpdate[0].ProductType
        }
        await approveSupplyService(newProduct);
        setVendorList(newList);

    }

    async function exportFile() {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(path);
         fileReader.onload = await ((evt) => {
            const bufferArray = evt.target.result;
            const wb = XLSX.read(bufferArray,{type:'buffer'});
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            const data = XLSX.utils.sheet_to_json(ws); 
            setVendorList(data);
            console.log(vendorList);
            setLoading(false);
        })
    }

    if (loading)
    return (
    <div className="row border-dark ">
    <br/>
    <h1>New Supplies from Excel</h1>
    <div className="form-group">
    <div className="form-group mx-sm-5 mb-2">
        
    <input type="file" className="form-control" accept=".xlsx" onChange={(e)=>{setPath(e.target.files[0]);}}/></div>
    <div className="form-group mx-sm-5 mb-2">
    <button className="btn btn-warning text-dark" value="file" onClick={exportFile}>Export</button></div>
    </div>



    </div>
    )
    return (
        <div className="row border-dark ">
        <div className="col-sm-12 col-md-12 ">

        <table className="table">
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Product Quantity</th>
                    <th>Approve Supply</th>
                    
                </tr>

            </thead>
            <tbody>
                {vendorList.map((vendor, key) => (
                    <Vendor vendor={vendor} key={key} approveSupply={approveSupply}/>
                 
                ))

                }
            </tbody>
        </table>
        </div>
        </div>
    )
}

export default VendorList
