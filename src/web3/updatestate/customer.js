import React, { useState } from 'react';
import { connectWallet,Supplychain } from '../connectmeta';
import Navigationn from '../../components/navigation';
import ApproveVerification from './verification';

const UpdateStateCust= () => {
  const [productId, setProductId] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [error, setError] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleVerificationIdChange = (event) =>{
    setVerificationId(event.target.value);
  }

  const updateState = async () => {
    try {
      const walletResponse = await connectWallet();
        await Supplychain.methods.updateStateByCustomer(productId, verificationId).send({
        from:  walletResponse.address // Assuming you want to send the transaction from the first account
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
    <Navigationn />
      <h2>Update State Page</h2>
      <div>
        <label htmlFor="productId">Product ID:</label>
        <input type="text" id="productId" value={productId} onChange={handleProductIdChange} />
      </div>
      <div>
        <label htmlFor="verificationId">Verification ID:</label>
        <input type="text" id="verificationId" value={verificationId} onChange={handleVerificationIdChange} />
      </div>
      <button onClick={updateState}>Update State</button>
      {error && <p>Error: {error}</p>}
      <ApproveVerification />
    </div>
  );
};

export default UpdateStateCust;
