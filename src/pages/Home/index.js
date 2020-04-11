import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    /*api.get('products').then((response) => {
      setProducts(response.data);
    });*/

    (async () => {
      const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    })();
  }, []);

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button">
            <div>
              <MdAddShoppingCart size={16} color="fff" />
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

/*
export default class Home extends React.Component {
  state = {
    products: [],
  }

  async componenteDidMount() {
    const response = awat api.get('products');

    this.setState({ products: response.data});
  }

  render() {
    return (
      <ProductList>
        <li></li>
      </ProductList>
    );
  }
}
*/
