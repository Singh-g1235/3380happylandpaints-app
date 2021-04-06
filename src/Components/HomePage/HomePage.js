import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import ProductTable from "../ProductTable/ProductTable";
import {
  addProductToCart,
  getProductByIdService,
  getProductsService,
  getCart,
} from "../../Services/cartService";

function HomePage() {
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  function refreshPage() {
    setLoading(true);

    getProductsService()
      .then((res) => {
        setInventory(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }

  useEffect(() => {
    refreshPage();
  }, []);

  async function addToCart(e) {
    var product = await getProductByIdService(e.target.value);

    await addProductToCart(product);
    //await deleteProductFromCart(e.target.value)
    refreshPage();
  }

  async function viewCart(e) {
    await getCart(cart);
    history.push("/viewCart");
  }

  //Check if there was an error
  //Check if we are loading
  if (loading)
    return (
      <div className="alert alert-info">
        Please stand by while we connect your call....
      </div>
    );
  if (error)
    return (
      <div className="alert alert-danger">There was an error loading...</div>
    );

  return (
    <div id="home_page">
      <ProductTable
        addToCart={addToCart}
        viewCart={viewCart}
        inventory={inventory}
      />
    </div>
  );
}

export default HomePage;
