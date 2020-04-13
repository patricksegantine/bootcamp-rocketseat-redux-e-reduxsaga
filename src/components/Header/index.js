import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cartSize} {cartSize === 1 ? 'item' : 'itens'}
          </span>
        </div>
        <MdShoppingBasket size={36} color="fff" />
      </Cart>
    </Container>
  );
}

/**
 * O 'connect' pode receber parâmetros e o primeiro parâmetro que ele recebe é uma função.
 * Essa função recebe um estado inteiro do redux
 * e podemos retornar desse estado as informações que eu quero acessar dentro deste componente
 * e geralmente retornamos essas informações em formato de um objeto
 */
export default connect((state) => ({
  // 'cart' é o reducer passado no rootReducer
  cartSize: state.cart.length,
}))(Header);
