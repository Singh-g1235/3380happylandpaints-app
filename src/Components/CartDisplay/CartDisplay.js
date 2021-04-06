import React from "react";

function CartDisplay(props) {
  return !props.cart.length ? (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  ) : (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item, i) => (
            <tr className="align-middle">
              <td>{item.ProductName}</td>
              <td>{item.ProductQuantity}</td>
              <td>${item.ProductAmount.toFixed(2)}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={(e) => {
                    props.deleteProduct(item.ProductId);
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="container">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-warning fs-4 mt-4"
              onClick={props.checkout}
            >
              Checkout
            </button>
          </div>
          <div className="col col-lg-5">
            <label className="display-6 align-middle text-end mt-4 ms-4">
              $
              {props.cart
                .map((ele) => ele.ProductAmount)
                .reduce((total, price) => total + price, 0)}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDisplay;
