import React, { useState } from 'react';
import { connectWallet,Supplychain } from '../connectmeta';
import Navigationn from '../../components/navigation';
import ApproveVerification from './verification';

const UpdateStateDist= () => {
  const [productId, setProductId] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [retailerAddress, setRetailerAddress] = useState('');
  const [error, setError] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleRetailerAddressChange = (event) => {
    setRetailerAddress(event.target.value);
  };

  const handleVerificationIdChange = (event) =>{
    setVerificationId(event.target.value);
  }

  const updateState = async () => {
    try {
      const walletResponse = await connectWallet();
      await Supplychain.methods.updateStateByDistributor(productId,verificationId, retailerAddress).send({
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
      <div>
        <label htmlFor="distributorAddress">Retailer Address:</label>
        <input type="text" id="retailerAddress" value={retailerAddress} onChange={handleRetailerAddressChange} />
      </div>
      <button onClick={updateState}>Update State</button>
      {error && <p>Error: {error}</p>}
      <ApproveVerification />
    </div>
  );
};

export default UpdateStateDist;
