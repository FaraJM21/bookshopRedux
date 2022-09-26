import React, { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { userBooks } from "../redux/usersReducer";

function Main() {
  let text = useLocation();

  const [books, setBooks] = useState({});

  let dispatch = useDispatch();
  let allBooks = useSelector((state) => state.books.book);
  const admin = useSelector((state) => state.admin.admin);
  const users = useSelector((state) => state.users);
  console.table(users);

  const getBook = (id) => {
    let book = allBooks.find((book) => book.id === id);

    setBooks({ ...books, book });
    text.state.user.book = books;
    dispatch(userBooks(text.state.user));
  };

  return (
    <main>
      <div className="booksMenu">
        {allBooks.map((book, index) => {
          return (
            <div className="book" key={index}>
              <img src={book.image} alt="404" width="250" height="350" />

              <div className="bookInfo">
                <h4>{book.title}</h4>
                <p>
                  Price: <span>{book.price} $</span>
                </p>
                <i style={{ display: admin.isAdmin ? "block" : "none" }}>
                  <BiPencil />
                </i>
                <button
                  style={{ display: admin.isAdmin ? "none" : "block" }}
                  onClick={() => {
                    getBook(book.id);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
