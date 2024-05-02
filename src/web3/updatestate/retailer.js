import React, { useState } from "react";
import { connectWallet, Supplychain } from "../connectmeta";
import Navigationn from "../../components/navigation";
import ApproveVerification from "./verification";
import { Button } from "react-bootstrap";

const UpdateStateRet = () => {
  const [productId, setProductId] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [error, setError] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleCustomerAddressChange = (event) => {
    setCustomerAddress(event.target.value);
  };

  const handleVerificationIdChange = (event) => {
    setVerificationId(event.target.value);
  };

  const updateState = async () => {
    try {
      const walletResponse = await connectWallet();
      await Supplychain.methods
        .updateStateByRetailer(productId, verificationId, customerAddress)
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
          placeholder="Product Id"
          className="text"
        />
      </div>
      <div>
        <input
          type="text"
          id="verificationId"
          value={verificationId}
          onChange={handleVerificationIdChange}
          placeholder="Verification Id"
          className="text"
        />
      </div>
      <div>
        <input
          type="text"
          id="retailerAddress"
          value={customerAddress}
          onChange={handleCustomerAddressChange}
          placeholder="Customer's Address"
          className="text"
        />
      </div>
      <Button
        className="btn1"
        variant="outline-dark"
        onClick={updateState}
      >
        Update State
      </Button><br /><br />

      {error && <p>Error: {error}</p>}
      <ApproveVerification /><br />
    </div>
    </div>
  );
};

export default UpdateStateRet;
