import React, { useState } from "react";
import { connectWallet, Supplychain } from "../connectmeta";
import Navigationn from "../../components/navigation";
import ApproveVerification from "./verification";
import { Button } from "react-bootstrap";

const UpdateStateCust = () => {
  const [productId, setProductId] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleVerificationIdChange = (event) => {
    setVerificationId(event.target.value);
  };

  const updateState = async () => {
    try {
      const walletResponse = await connectWallet();
      await Supplychain.methods
        .updateStateByCustomer(productId, verificationId)
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
          <h2>Update State Page</h2>
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
        <Button className="btn1" variant="outline-dark" onClick={updateState}>
            Update State
        </Button>
        {error && <p>Error: {error}</p>}<br /><br />
        <ApproveVerification /><br/>
      </div>
    </div>
  );
};

export default UpdateStateCust;
