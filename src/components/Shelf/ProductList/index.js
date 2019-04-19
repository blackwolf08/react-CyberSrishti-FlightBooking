import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
const ProductList = ({ products }) => {
  return products.map(p => {
    return <Product product={p} key={p.id} />;
    
  });
};

export default ProductList;
