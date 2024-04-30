import React, { useState } from 'react';
import { Supplychain } from './connectmeta';
import Navigationn from '../containers/nav';

export const states = ["Manufactured",
        "Product Purchased by a Distributor",
        "Product Shipped by the Manufacturer",
        "Product Received by Distributor",
        "Product Purchased by Customer",
        "Product Shipped by Distributor",
        "Product Received by Retailer",
        "Product Shipped by Retailer",
        "Product Received by Customer"];

const ViewCurrentState = () => {
  const [productId, setProductId] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [error, setError] = useState(null);


  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const viewState = async () => {
    try {
      const currentState = await Supplychain.methods.viewCurrentState(productId).call();
      setCurrentState(currentState);
    } catch (error) {
      setError(error.message);
    }
  };

return (
    <div>
      <Navigationn />
        <h2>View Current State</h2>
        <div>
            <label htmlFor="productId">Product ID:</label>
            <input type="text" id="productId" value={productId} onChange={handleProductIdChange} />
        </div>
        <button onClick={viewState}>View State</button>
        {currentState ? (
            <p>Current State: {states[currentState]}</p>
        ) : null}
        {error && <p>Error: {error}</p>}
    </div>
);
};

export default ViewCurrentState;
