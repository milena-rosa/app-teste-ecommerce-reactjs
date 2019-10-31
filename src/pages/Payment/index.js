import React from 'react';

import history from '~/services/history';

import { Container } from './styles';

export default function Payment() {
  function handlePurchase() {
    history.push('/purchase');
  }

  return (
    <Container>
      <h1>Escolha a forma de pagamento</h1>
      <form>
        <div>
          <input
            type="radio"
            name="paymentMethod"
            id="billet"
            value="billet"
            defaultChecked
          />
          <label htmlFor="billet">Boleto</label>
        </div>
        <div>
          <input
            type="radio"
            name="paymentMethod"
            id="creditCard"
            value="creditCard"
          />
          <label htmlFor="creditCard">Credit Card</label>
        </div>
        <div>
          <input type="radio" name="paymentMethod" id="payPal" value="payPal" />
          <label htmlFor="payPal">PayPal</label>
        </div>
        <button type="button" onClick={() => handlePurchase()}>
          <span>Finalizar compra</span>
        </button>
      </form>
    </Container>
  );
}
