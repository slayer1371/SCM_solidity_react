import React, { useState, useEffect } from "react";
import { Supplychain } from "./connectmeta";

const ProductDetails = () => {
  const [productId, setProductId] = useState("");
  const [productDetails, setProductDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const getProductDetails = async () => {
    try {
      const result = await Supplychain.methods
        .viewProductDetailsById(productId)
        .call();
      setProductDetails({
        productName: result[0],
        productPrice: result[1],
        productState: result[2],
        location: result[3],
      });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (productId !== "") {
      getProductDetails();
    }
  }, [productId]);

  return (
    <div>
      <h2>View Product Details</h2>
      <div>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={handleProductIdChange}
          className="text"
          placeholder="Product ID"
        />
        <button onClick={getProductDetails}>View Details</button>
      </div>
      {productDetails && (
        <div>
          <h3>Product Details</h3>
          <p>Name: {productDetails.productName}</p>
          <p>Price: {productDetails.productPrice}</p>
          <p>State: {productDetails.productState}</p>
          <p>Location: {productDetails.location}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ProductDetails;
