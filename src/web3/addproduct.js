import { useState } from "react";
import { Supplychain, connectWallet } from "./connectmeta";
import { Button } from "react-bootstrap";
import Navigationn from "../containers/nav";
import "./addproduct.css";

async function addProduct(name, price, location) {
  const walletResponse = await connectWallet();
  return Supplychain.methods
    .addProduct(name, price, location)
    .send({ from: walletResponse.address });
}

function Product() {
  const [names, setNames] = useState("");
  const [prices, setPrices] = useState("");
  const [locations, setLocations] = useState("");

  const handlenameInputChange = (event) => {
    setNames(event.target.value);
  };

  const handlepriceInputChange = (event) => {
    setPrices(event.target.value);
  };

  const handlelocationInputChange = (event) => {
    setLocations(event.target.value);
  };

  return (
    <div>
      <Navigationn />
      <div className="main">
        <div className ="two">
          <h1>
            <u>ADD PRODUCT <br />(TO BE DONE BY THE MANUFACTURER ONLY)</u>
          </h1>
        </div>
          <input
            type="text"
            placeholder="Product's Name"
            value={names}
            onChange={handlenameInputChange}
            className="text"
          />
          <br />
          <input
            type="text"
            placeholder="Product's Price"
            value={prices}
            onChange={handlepriceInputChange}
            className="text"
          />
          <br />
          <input
            type="text"
            placeholder="Product's Production Location"
            value={locations}
            onChange={handlelocationInputChange}
            className="text"
          />
          <br />
        <Button className="btn1" variant="outline-primary" onClick={() => addProduct(names,prices,locations)}>
            Add Product
        </Button>
        </div>

      </div>
  );
}

export default Product;
