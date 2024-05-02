import React, { useState } from "react";
import { connectWallet, Supplychain } from "../connectmeta";
import Navigationn from "../../components/navigation";
import ApproveVerification from "./verification";
import { Button } from "react-bootstrap";

const UpdateStateDist = () => {
  const [productId, setProductId] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [retailerAddress, setRetailerAddress] = useState("");
  const [error, setError] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleRetailerAddressChange = (event) => {
    setRetailerAddress(event.target.value);
  };

  const handleVerificationIdChange = (event) => {
    setVerificationId(event.target.value);
  };

  const updateState = async () => {
    try {
      const walletResponse = await connectWallet();
      await Supplychain.methods
        .updateStateByDistributor(productId, verificationId, retailerAddress)
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
            id="verificationId"
            value={verificationId}
            onChange={handleVerificationIdChange}
            className="text"
            placeholder="Verification Id"
          />
      </div>
      <div>
        <input
          type="text"
          id="retailerAddress"
          value={retailerAddress}
          onChange={handleRetailerAddressChange}
          className="text"
          placeholder="Retailer's Address"
        />
      </div>
      <Button className="btn1" variant="outline-dark" onClick={updateState}>
            Update State
        </Button>     <br/><br/> {error && <p>Error: {error}</p>}
      <ApproveVerification />
      <br />
    </div>
    </div>
  );
};

export default UpdateStateDist;
