import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { formatPrice } from '~/util/format';
import api from '~/services/api';
import history from '~/services/history';
import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error(
      `Quantidade disponível no estoque é de somente ${stockAmount} item(ns).`
    );
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      formattedPrice: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  if (amount > stockAmount) {
    toast.error(
      `Quantidade disponível no estoque é de somente ${stockAmount} item(ns).`
    );
    return;
  }

  yield put(updateAmountSuccess(id, amount));
  history.push('/cart');
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
