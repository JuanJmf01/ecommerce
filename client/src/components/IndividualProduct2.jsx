// IndividualProduct.jsx
import React from 'react';

function IndividualProduct({ products }) {
    if (!products) {
        return null; // O manejar el caso en que product es undefined
    }

    return (
        <div className="product-container">
        <h1>{products.name}</h1>
        <p>{products.description}</p>
        <p>${products.price}</p>
        </div>
    );
}

export default IndividualProduct;
