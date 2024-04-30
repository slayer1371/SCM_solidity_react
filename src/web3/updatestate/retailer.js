import React, { useState } from 'react';
import { connectWallet,Supplychain } from '../connectmeta';
import Navigationn from '../../components/navigation';

const UpdateStateRet= () => {
  const [productId, setProductId] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [error, setError] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleCustomerAddressChange = (event) => {
    setCustomerAddress(event.target.value);
  };

  const handleVerificationIdChange = (event) =>{
    setVerificationId(event.target.value);
  }

  const updateState = async () => {
    try {
      const walletResponse = await connectWallet();
      const result = await Supplychain.methods.updateStateByDistributor(productId,verificationId, customerAddress).send({
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
        <label htmlFor="distributorAddress">Customer Address:</label>
        <input type="text" id="retailerAddress" value={customerAddress} onChange={handleCustomerAddressChange} />
      </div>
      <button onClick={updateState}>Update State</button>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default UpdateStateRet;