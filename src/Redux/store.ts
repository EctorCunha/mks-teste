import { configureStore } from "@reduxjs/toolkit";
import cartState from "./cartState";


export const store = configureStore({
  reducer: {
    add: cartState,
  },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
