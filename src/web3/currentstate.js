import React, { useState } from "react";
import { Supplychain } from "./connectmeta";
import Navigationn from "../containers/nav";
import { Button } from "react-bootstrap";
import "./updatestate/same.css";
import Maps from "../maps";
import locations from "../data/location";

export const states = [
  "Manufactured",
  "Product Purchased by a Distributor",
  "Product Shipped by the Manufacturer",
  "Product Received by Distributor",
  "Product Purchased by Customer",
  "Product Shipped by Distributor",
  "Product Received by Retailer",
  "Product Shipped by Retailer",
  "Product Received by Customer",
];

const ViewCurrentState = (props) => {
  const [productId, setProductId] = useState("");
  let [currentState, setCurrentState] = useState("");
  const [error, setError] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const viewState = async () => {
    try {
      const currentState = await Supplychain.methods
        .viewCurrentState(productId)
        .call();
      setCurrentState(currentState);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Navigationn />
      <div className="main">
      <div className="two">
      <h2>View Current State of the Product</h2>
      </div>
      <div>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={handleProductIdChange}
          className="text"
          placeholder="Product ID"
        />
      </div>

      <Button className="btn2" variant="outline-dark" onClick={viewState} >View</Button>
      {currentState ? <p>Current State: {states[currentState]}</p> : null}
      {error && <p>Error: {error}</p>}
      <Maps location={
        (currentState === 0) ? locations[currentState] :
        (currentState === 1) ? locations[currentState] :
        (currentState === 2) ? locations[currentState] :
        (currentState === 3) ? locations[currentState] :
        (currentState === 4) ? locations[currentState] :
        (currentState === 5) ? locations[currentState] :
        (currentState === 6) ? locations[currentState] :
        (currentState === 7) ? locations[currentState] : locations[currentState]
      }/>
    </div>
    </div>
  );
};

export default ViewCurrentState;
