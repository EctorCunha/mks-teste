import { configureStore } from "@reduxjs/toolkit";
import cartState from "./cartState";
// import createSagaMiddleware from 'redux-saga';
// import rootSagas from "./rootSagas";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    add: cartState,
  },
  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware({ thunk: false }),
  //   sagaMiddleware
  // ]
});

// sagaMiddleware.run(rootSagas);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
