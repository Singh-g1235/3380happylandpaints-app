import React from 'react'

function ProductAdd(props) {
    // contains form to add product
    const {update,action} = props;
    return (
        <div className="col-sm-12 col-md-12 ">

        <h1>Add Product</h1>
        <form  onSubmit={action} action="#">
        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Product Id : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductId" required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Product Name : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductName" required onChange={update} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Available Colours : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="availableColours" required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Sheen : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="sheen" required onChange={update} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Clean Up: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="cleanup" required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Resin Type: </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="resinType" required onChange={update} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Recommended Use : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="recommendedUse" required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">MPI Rating : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="mpiRating" required onChange={update} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">VOC Level : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="vocLevel" required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Product Quantity : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductQuantity" required onChange={update} /></div>
        </div><br/>

        <div className="form-group row">
        <label  className="col-sm-3 col-form-label">Product Type : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductType" required onChange={update} /></div>
        <label  className="col-sm-3 col-form-label">Product Amount : </label>
        <div className="col-sm-3"><input className="form-control" type="text" id="ProductAmount" required onChange={update} /></div>
        </div><br/>
        <button className="btn btn-warning text-dark" type="submit" >Add Product</button>

        </form>
        </div>
    )
}

export default ProductAdd
