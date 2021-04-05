import React from 'react'

function ProductEdit(props) {
    //contains form to edit product
    const {update,action,currentProduct} = props;
    return (
        <div className="col-sm-12 col-md-12 ">
        <h1>Edit Product</h1>
        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Product Id : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductId" onChange={update} value={currentProduct.ProductId}/></div>
        <label  className="col-sm-3 col-form-label">Product Name : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductName" onChange={update} value={currentProduct.ProductName}/></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Available Colours : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="availableColours" onChange={update} value={currentProduct.availableColours}/></div>
        <label  className="col-sm-3 col-form-label">Sheen : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="sheen" onChange={update} value={currentProduct.sheen}/></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Clean Up: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="cleanup" onChange={update} value={currentProduct.cleanup}/></div>
        <label  className="col-sm-3 col-form-label">Resin Type: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="resinType" onChange={update} value={currentProduct.resinType}/></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Recommended Use : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="recommendedUse" onChange={update} value={currentProduct.recommendedUse}/></div>
        <label  className="col-sm-3 col-form-label">MPI Rating : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="mpiRating" onChange={update} value={currentProduct.mpiRating}/></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">VOC Level : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="vocLevel" onChange={update} value={currentProduct.vocLevel}/></div>
        <label  className="col-sm-3 col-form-label">Product Quantity : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductQuantity" onChange={update} value={currentProduct.ProductQuantity} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Product Type : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductType" onChange={update} value={currentProduct.ProductType}/></div>
        <label  className="col-sm-3 col-form-label">Product Amount : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductAmount" onChange={update} value={currentProduct.ProductAmount}/></div>
        </div><br/>
        <button className="btn btn-warning text-dark" onClick={action}>Edit Product</button>
        </div>
       
    )
}

export default ProductEdit
