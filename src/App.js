import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookStore from "./routes/BookStore";
import Cart from "./routes/Cart";
import Layout from "./routes/Layout";
import Login from "./routes/Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Register from "./routes/Register";
import "./style/style.scss";

function App() {
  // const user = [
  //   {
  //     user: {
  //       userName: "farrux",
  //       books: [
  //         {
  //           title: "a",
  //           auth: "b",
  //           price: 23,
  //         },
  //         {
  //           title: "a",
  //           auth: "b",
  //           price: 23,
  //         },
  //         {
  //           title: "a",
  //           auth: "b",
  //           price: 23,
  //         },
  //         {
  //           title: "a",
  //           auth: "b",
  //           price: 23,
  //         },
  //       ],
  //     },
  //   },

  //   {
  //     user: {
  //       userName: "aziz",
  //       books: {
  //         title: "a",
  //         auth: "b",
  //         price: 23,
  //       },
  //     },
  //   },
  // ];

  // console.log(user);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login/>}></Route>
          <Route path="register" element={<Register />}></Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="bookstore" element={<BookStore />}></Route>
            <Route path="cart" element={<Cart />}></Route>
          </Route>


          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
