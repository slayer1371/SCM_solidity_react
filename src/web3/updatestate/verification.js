import React, { useState } from "react";
import { Supplychain, connectWallet } from "../connectmeta";
import { Button } from "react-bootstrap";

const ApproveVerification = () => {
  const [verificationId, setVerificationId] = useState("");
  const [error, setError] = useState(null);

  const handleVerificationIdChange = (event) => {
    setVerificationId(event.target.value);
  };

  const approveVerification = async () => {
    try {
      const walletResponse = await connectWallet();
      await Supplychain.methods.Approve(verificationId).send({
        from: walletResponse.address, // Assuming you want to send the transaction from the first account
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2><u>Verification</u></h2><br />
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
      <Button
        className="btn1"
        variant="outline-dark"
        onClick={approveVerification}
      >
        Approve Verification
      </Button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ApproveVerification;
