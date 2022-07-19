import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import { Navbar, Heading } from "react-bulma-components";
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

export default function NavBar() {
  const [active, setActive] = useState(false)

  return (
    <Navbar fixed='top' transparent>
      <Navbar.Brand>
        <Navbar.Item renderAs='div' onClick={() => setActive(false)} >
          <Link to={'/home'}>
            <Heading>Iru Vermú</Heading>
          </Link>
        </Navbar.Item>
        <Navbar.Burger onClick={() => setActive(!active)} className={`${active ? 'is-active' : ''}`} renderAs='div' aria-label="menu" data-target="navBarMenu"/>
      </Navbar.Brand>
      <Navbar.Menu id='navBarMenu' className={`${active ? 'is-active' : ''}`} >
        <Navbar.Container align='right'>
          <Navbar.Item renderAs='div' onClick={() => setActive(false)} >
            <Link to={'/home'}>
              <Heading subtitle>Home</Heading>
            </Link>
          </Navbar.Item>
          <Navbar.Item renderAs='div' onClick={() => setActive(false)} >
            <Link to={'/info'}>
              <Heading subtitle>Nosotros</Heading>
            </Link>
          </Navbar.Item>
          <Navbar.Item hoverable>
            <Navbar.Link onClick={() => setActive(false)} >
              <Link to={'/category/all'}>
                <Heading subtitle>Productos</Heading>
              </Link>
            </Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item renderAs='div' value='item' onClick={() => setActive(false)} >
                <Link to={'/category/Foods'}>Comidas</Link>
              </Navbar.Item>
              <Navbar.Item renderAs='div' value='item' onClick={() => setActive(false)} >
                <Link to={'/category/Drinks'}>Bebidas</Link>
              </Navbar.Item>
              <Navbar.Item renderAs='div' value='item' onClick={() => setActive(false)} >
                <Link to={'/category/combos'}>Combos</Link>
              </Navbar.Item>
              <Navbar.Item renderAs='div' value='item' onClick={() => setActive(false)} >
                <Link to={'/category/promos'}>Promociones</Link>
              </Navbar.Item>
            </Navbar.Dropdown>
          </ Navbar.Item>
          <Navbar.Item renderAs='div' onClick={() => setActive(false)} >
            <Link to={'/contact'}>
              <Heading subtitle>Contacto</Heading>
            </Link>
          </Navbar.Item>
        </Navbar.Container>
        <CartWidget />
      </Navbar.Menu>
    </Navbar>
  );
}
