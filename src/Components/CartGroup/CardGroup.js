import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {

  const products = [
    { id: 1, name: 'laptop', price: 10000 },
    { id: 2, name: 'Mobile', price: 50000 },
    { id: 3, name: 'Watch', price: 5000 },
  ];

  return (
    <div className="card-group">
      {products.map(product => <Card key={product.id} product={product}></Card>)}
    </div>
  );
};

export default CardGroup;