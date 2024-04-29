import React, { useState } from 'react';
import { connectWallet,Supplychain } from './connectmeta';

const UpdateState= () => {
  const [productId, setProductId] = useState('');
  const [distributorAddress, setDistributorAddress] = useState('');
  const [transactionHash, setTransactionHash] = useState('');
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
      const result = await Supplychain.methods.updateStateByManufacturer(productId, distributorAddress).send({
        from:  walletResponse.address // Assuming you want to send the transaction from the first account
      });
      setTransactionHash(result.transactionHash);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Update State Page</h2>
      <div>
        <label htmlFor="productId">Product ID:</label>
        <input type="text" id="productId" value={productId} onChange={handleProductIdChange} />
      </div>
      <div>
        <label htmlFor="distributorAddress">Distributor Address:</label>
        <input type="text" id="distributorAddress" value={distributorAddress} onChange={handleDistributorAddressChange} />
      </div>
      <button onClick={updateState}>Update State</button>
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default UpdateState;
