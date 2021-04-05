import React from 'react'

function ProductRecord(props) {

    var styleImg = {
        width: 150,
        height: 150,

    }
    return (

        <div class="accordion-item">
            <h2 class="accordion-header " id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img className="" style={styleImg} src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=30" class="card-img-top" alt="..." />
                    <p class="fs-5 ms-3 text-success">{props.productName}</p>
                </button>
            </h2>
            <div id={props.productId} class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="row">
                        <div class="col-8">
                            <p>The product is available in <strong>{props.productDescription.availableColours}</strong>. Sheen available for this color is <strong>{props.productDescription.sheen}</strong>.Product is easy to and with <strong>{props.productDescription.cleanup}</strong>
                            . Rasin type is <strong> {props.productDescription.resinType}</strong>. This product is only for <strong>{props.productDescription.recommendedUse}</strong>.
                             MPI rating is <strong> {props.productDescription.mpiRating}</strong> and VOC level is <strong>{props.productDescription.vocLevel}</strong>.  </p>
                            <h3>Price : ${props.productAmount}</h3>
                        </div>
                        <div class="col-4">

                            <button type="button" class="btn btn-primary" onClick={props.addToCart} value={props.productId}>Add to Cart</button>
                            <button type="button" class="btn btn-primary"onClick={props.viewCart} >View Cart</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default ProductRecord
