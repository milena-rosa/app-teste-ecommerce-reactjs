import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '~/util/format';
import history from '~/services/history';
import * as CartActions from '~/store/modules/cart/actions';

import {
  Container,
  Showcase,
  ShortDescription,
  CollapsedDescription,
  Photo,
  Thumbs,
  Preview,
  BuyBox,
  Price,
  BuyButton,
  Features,
  Description,
  Attributes,
} from './styles';

export default function Details() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState('');

  useEffect(() => {
    const productDetails = history.location.state.product;
    console.tron.log(productDetails);
    setProduct(productDetails);
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <Showcase>
        <ShortDescription>
          <strong>{product.title}</strong>
          <CollapsedDescription
            text={product.description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="words"
          />
          <a href="#description">Leia mais</a>
        </ShortDescription>
        <Photo>
          {/* <Thumbs>imagens na vertical</Thumbs> */}
          <Preview src={product.image} />
        </Photo>
        <BuyBox>
          <Price>{formatPrice(product.price)}</Price>
          <BuyButton type="button" onClick={() => handleAddProduct(product.id)}>
            <MdAddShoppingCart size={16} color="#fff" />{' '}
            <span>Adicionar ao carrinho</span>
          </BuyButton>
        </BuyBox>
      </Showcase>

      <Features>
        <Description id="description">
          <strong>Descrição</strong>
          <p>{product.description}</p>
        </Description>
        <Attributes>
          <li>
            <strong>Nome:</strong>
            {product.title}
          </li>
          <li>
            <strong>Indicado para:</strong>
            {product.indicatedFor}
          </li>
          <li>
            <strong>Material:</strong>
            {product.material}
          </li>
          <li>
            <strong>Categoria:</strong>
            {product.category}
          </li>
          <li>
            <strong>Composição:</strong>
            {product.composition}
          </li>
          <li>
            <strong>Origem:</strong>
            {product.origin}
          </li>
        </Attributes>
      </Features>
    </Container>
  );
}
