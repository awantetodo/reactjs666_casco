import React, { useEffect, useState } from 'react';
import ItemDetail from '../components/ItemDetail';
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        fetch('../products.json')
        .then( res => res.json())
        .then( data => {
            const prodFound = data.find( prod => prod.id === id)
            setProduct(prodFound);
        })
        .catch( error => console.error( error ))
    },[id])

    return (
        <>
            {product ? <ItemDetail product={product} /> : console.log('ItemDetailContainer: item undefined yet') }
        </ >
    )
}
