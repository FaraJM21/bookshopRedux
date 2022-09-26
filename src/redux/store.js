import { configureStore } from "@reduxjs/toolkit";
import admin from "./adminReducer";
import books from "./bookReducer";
import isLoged from "./islogedReducer";
import capital from "./storeCapital";
import users from "./usersReducer";

export const store = configureStore({
  reducer: {
    books,
    users,
    isLoged,
    admin,
    capital,
  },
});
