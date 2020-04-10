import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-do-barcelona-home-1920-sn-torcedor-nike-masculina/86/HZM-1602-186/HZM-1602-186_zoom1.jpg?ts=1566919185&ims=544x"
          alt=""
        />
        <strong>Camisa do Barcelona Home 19/20 s/nº Torcedor Nike Masculina..xxxxxxxxxx xxxxxxxxxxxxx</strong>
        <span>R$ 139,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/bone-overking-aba-curva-trucker-hard-logo/08/AEU-0033-008/AEU-0033-008_zoom1.jpg?ts=1585973164&ims=544x"
          alt=""
        />
        <strong>Boné Overking Aba Curva Trucker Hard Logo - Azul</strong>
        <span>R$ 139,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-20-masculino/26/NQQ-0375-026/NQQ-0375-026_zoom1.jpg?ts=1577993355&"
          alt=""
        />
        <strong>Tênis Adidas Duramo Lite 20 Masculino - Preto e Branco</strong>
        <span>R$ 139,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-20-masculino/26/NQQ-0375-026/NQQ-0375-026_zoom1.jpg?ts=1577993355&"
          alt=""
        />
        <strong>Tênis Adidas Duramo Lite 20 Masculino - Preto e Branco</strong>
        <span>R$ 139,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-20-masculino/26/NQQ-0375-026/NQQ-0375-026_detalhe1.jpg?ts=1577993355?ims=280x280"
          alt=""
        />
        <strong>Tênis Adidas Duramo Lite 20 Masculino - Preto e Branco</strong>
        <span>R$ 139,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="fff" />
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
