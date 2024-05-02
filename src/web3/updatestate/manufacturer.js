import React, { useState } from "react";
import { connectWallet, Supplychain } from "../connectmeta";
import Navigationn from "../../components/navigation";
import ApproveVerification from "./verification";
import { Button } from "react-bootstrap";

const UpdateStateManu = () => {
  const [productId, setProductId] = useState("");
  const [distributorAddress, setDistributorAddress] = useState("");
  const [error, setError] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleDistributorAddressChange = (event) => {
    setDistributorAddress(event.target.value);
  };

  const updateState = async () => {
    try {
      const walletResponse = await connectWallet();
      await Supplychain.methods
        .updateStateByManufacturer(productId, distributorAddress)
        .send({
          from: walletResponse.address, // Assuming you want to send the transaction from the first account
        });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Navigationn />
      <div className="main">
        <div className="two">
      <h2><u>Update State Page</u></h2>
      </div>
      <div>
      <input
            type="text"
            id="productId"
            value={productId}
            onChange={handleProductIdChange}
            className="text"
            placeholder="Product Id"
          />
      </div>
      <div>
        <input
          type="text"
          id="distributorAddress"
          value={distributorAddress}
          onChange={handleDistributorAddressChange}
          className="text"
          placeholder="Distributor's Address"
        />
      </div>
      <Button
        className="btn1"
        variant="outline-dark"
        onClick={updateState}
      >
        Update State
      </Button> <br/><br/>
      {error && <p>Error: {error}</p>}
      <ApproveVerification />
      <br />
    </div>
    </div>
  );
};

export default UpdateStateManu;
