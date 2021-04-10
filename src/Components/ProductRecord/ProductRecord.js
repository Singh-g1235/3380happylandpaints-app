import React from "react";

function ProductRecord(props) {
  var styleImg = {
    width: 150,
    height: 150,
  };
  return (
    <div className="accordion-item">
      <h2 className="accordion-header " id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <img
            className=""
            style={styleImg}
            src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=30"
            className="card-img-top"
            alt="..."
          />
          <p className="fs-5 ms-3 text-success">{props.productName}</p>
        </button>
      </h2>
      <div
        id={props.productId}
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col-8">
              <p>
                The product is available in{" "}
                <strong>{props.productDescription.availableColours}</strong>.
                Sheen available for this color is{" "}
                <strong>{props.productDescription.sheen}</strong>.Product is
                easy to and with{" "}
                <strong>{props.productDescription.cleanup}</strong>. Rasin type
                is <strong> {props.productDescription.resinType}</strong>. This
                product is only for{" "}
                <strong>{props.productDescription.recommendedUse}</strong>. MPI
                rating is <strong> {props.productDescription.mpiRating}</strong>{" "}
                and VOC level is{" "}
                <strong>{props.productDescription.vocLevel}</strong>.{" "}
              </p>
              <h3>Price : ${props.productAmount}</h3>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-warning"
                onClick={props.addToCart}
                value={props.productId}
              >
                Add to Cart
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-warning"
                onClick={props.viewCart}
              >
                View Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRecord;
