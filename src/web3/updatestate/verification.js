import React, { useState } from 'react';
import { Supplychain, connectWallet } from '../connectmeta';

const ApproveVerification = () => {
  const [verificationId, setVerificationId] = useState('');
  const [error, setError] = useState(null);

  const handleVerificationIdChange = (event) => {
    setVerificationId(event.target.value);
  };

  const approveVerification = async () => {
    try {
        const walletResponse = await connectWallet();
      await Supplychain.methods.Approve(verificationId).send({
        from: walletResponse.address // Assuming you want to send the transaction from the first account
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Approve Verification</h2>
      <div>
        <label htmlFor="verificationId">Verification ID:</label>
        <input type="text" id="verificationId" value={verificationId} onChange={handleVerificationIdChange} />
      </div>
      <button onClick={approveVerification}>Approve</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ApproveVerification;
