import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

export default function ProductDetailContainer() {
  const { category } = useParams();
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch('../products.json')
      .then( res => res.json())
      .then( data => {
        let filterProducts = [];
        data.forEach(prod => {
          if(category === undefined || category === 'all') {
            filterProducts.push(prod);
          } else if (category === 'drinks' && prod.description === 'Bebidas' ) {
            filterProducts.push(prod);
          } else if (category === 'foods' && prod.description === 'Comidas' ) {
            filterProducts.push(prod);
          } else if (category === 'combos' && prod.description === 'Combos' ) {
            filterProducts.push(prod);
          } else if (category === 'promos' && prod.description === 'Promoción' ) {
            filterProducts.push(prod);
          }
        });
        setProducts(filterProducts);

      })
      .catch( error => console.error( error ))
  },[category])

  return (
    <>
      <ItemList productos={products} />
    </ >
  );
}
