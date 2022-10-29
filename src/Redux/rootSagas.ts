import { call, put, takeEvery } from "redux-saga/effects";
import { addProduct, addToCart, setData } from "./cartState";

function* fetchData() {
  const res = yield call(
    fetch,
    `https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC`)

  const data = yield res.json();

  yield put(setData(data.products));

}

// function* addCart(){
//     const addToCart = ({id, quantity}:any) => ({type: 'cart/addToCart', payload: id, quantity: +1});

//     yield put(addProduct(addToCart))
// }



export default function* rootSagas() {
  yield takeEvery("cart/setData", fetchData);
//   yield takeEvery("cart/addToCart", addCart);
}
