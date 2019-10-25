import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { Container } from './styles';

export default function Purchase() {
  return (
    <Container>
      <h1>Compra concluída com sucesso</h1>
      <MdShoppingCart size={100} color="#211451" />
    </Container>
  );
}
