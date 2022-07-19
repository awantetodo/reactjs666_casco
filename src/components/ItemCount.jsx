import { Button, Container } from 'react-bulma-components';

const ItemCount = ({ quantity, setQuantity, addToCart }) => {
    const sumar = () => { setQuantity(quantity + 1) }
    const restar = () => {
        quantity > 1 ? setQuantity(quantity - 1) : alert('No puedes quitar más productos')
    }

    return (
        <>
            <Container m={3} display='flex' flexWrap='wrap' justifyContent='center' alignItems='center'>
                <Button onClick={restar}>-</Button>
                <p style={{width: '75px'}}>{quantity}</p>
                <Button onClick={sumar}>+</Button>
            </Container>
            <Button onClick={() => {addToCart()}}  color="info">Agregar al Carrito</Button>
        </>

    )
}

export default ItemCount
