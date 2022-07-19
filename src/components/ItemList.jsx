import 'bulma/css/bulma.min.css';
import React from 'react';
import { Container } from 'react-bulma-components';
import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <>
            <Container display='flex' flexWrap='wrap' justifyContent='center'>
                {productos?.map(product => <Item key={product.id} product={product} />)}
            </Container>
        </ >
    )
}

export default ItemList
