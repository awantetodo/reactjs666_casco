import React from 'react';
import 'bulma/css/bulma.min.css';
import { Button, Card, Content, Heading  } from 'react-bulma-components';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const { id, title} = product

    return (
        <Card style={{ width: 300, margin: '25px' }}>
            <Card.Image
                size="4by3"
                src="http://bulma.io/images/placeholders/1280x960.png"
                href="#"
            />
            <Card.Content textAlign='center' >
                <Heading size={4} >{title}</Heading>
                <Content>
                    <Button color="info">
                        <Link to={"/item/"+id} style={{color:'white'}}>Detalles</Link>
                    </Button>
                </Content>
            </Card.Content>
        </Card>
    );
}

export default Item