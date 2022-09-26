import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const bookSlice = createSlice({
  name: "books",
  
  initialState: {
     book: [ {

    id: uniqid(),
    title: `The Three Musketeers`,
    image: "https://m.media-amazon.com/images/I/51UJsfRHTRL.jpg",
    price: 55,
  },

  {
    id: uniqid(),
    title: ` Treasure Island`,
    image: "https://m.media-amazon.com/images/I/61Nvv+LTdeL.jpg",
    price: 40,
  },

  {
    id: uniqid(),
    title: `The Right Stuff`,
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1441416080l/3030093._SY475_.jpg",
    price: 45,
  },

  {
    id: uniqid(),
    title: `King Solomon's Mines`,
    image: "https://m.media-amazon.com/images/I/51hfmWA4lwL.jpg",
    price: 68,
  },

  {
    id: uniqid(),
    title: `Journey to the Center of the Earth`,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328864746l/1086164.jpg",
    price: 105,
  },

  {
    id: uniqid(),
    title: `The Count of Monte Cristo`,
    image:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1309203605l/7126.jpg",
    price: 85,
  },

  {
    id: uniqid(),
    title: `The Jungle Book`,
    image: "https://m.media-amazon.com/images/I/51AuG91eHEL.jpg",
    price: 100,
  },

  {
    id: uniqid(),
    title: `20,000 Leagues Under the Sea`,
    image: "https://m.media-amazon.com/images/I/41M1iq7zdTL.jpg",
    price: 35,
  },

  {
    id: uniqid(),
    title: `The Odyssey `,
    image: "https://m.media-amazon.com/images/I/51Zl3KNANDL.jpg",
    price: 50,
  },

  {
    id: uniqid(),
    title: `Around the World in 80 Days `,
    image: "https://m.media-amazon.com/images/I/51XOe02htCL.jpg",
    price: 88,
  },
] },

  reducers: {
    addBook: (state, books) => {
      state.book.push(books.payload);
    },

    deleteBook: (state, books) => {
      state.book.filter((book) => book.id !== books.payload.id);
    },
  },
});


export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
