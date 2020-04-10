import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/camisa-do-barcelona-home-1920-sn-torcedor-nike-masculina/86/HZM-1602-186/HZM-1602-186_zoom1.jpg?ts=1566919185&ims=544x"
                alt=""
              />
            </td>
            <td>
              <strong>Camisa do Barcelona Home 19/20 s/nº Torcedor Nike Masculina..xxxxxxxxxx xxxxxxxxxxxxx</strong>
              <span>R$ 139,99</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$ 1920,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
