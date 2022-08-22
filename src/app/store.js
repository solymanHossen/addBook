import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../fetaures/BooksSlice";



const store=configureStore({
  reducer:{
    booksReducer: booksReducer,
  }
})

export default store;