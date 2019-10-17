import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList, DetailsLink, AddProductButton } from './styles';
import { formatPrice } from '~/util/format';
import * as CartActions from '~/store/modules/cart/actions';

import api from '~/services/api';
import history from '~/services/history';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  async function openProductDetails(id) {
    const response = await api.get(`products/${id}`);
    history.push(`products/${id}`, {
      product: response.data,
      amount: amount[id],
    });
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <DetailsLink
            type="button"
            onClick={() => openProductDetails(product.id)}
          >
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
          </DetailsLink>
          <span>{product.formattedPrice}</span>

          <AddProductButton
            type="button"
            onClick={() => handleAddProduct(product.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>Adicionar ao carrinho</span>
          </AddProductButton>
        </li>
      ))}
    </ProductList>
  );
}
