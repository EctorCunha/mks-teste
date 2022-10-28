
import { call, debounce, put } from 'redux-saga/effects';
// import { addToCart } from './cartState';





// function* fetchCharacters(): any {

//   let url = `https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC`;

//   const res = yield call(fetch, url, {
//     headers: { 'Content-Type': 'application/json' }
//   });

//   const data = yield res.data.products();

//   yield put(addToCart(data));
// }



// export default function* rootSagas() {
//   yield debounce(300, 'characters/fetchCharacters', fetchCharacters);
// }