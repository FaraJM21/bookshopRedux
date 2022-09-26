import React, { useState } from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { Outlet, Link, useLocation } from "react-router-dom";
import { GiWhiteBook } from "react-icons/gi";
import { useSelector } from "react-redux";
function HeaderNav() {
    
  const [newBook, setNewBook] = useState({});
  
  const capital = useSelector((state)=> state.capital.capital);
   let text = useLocation();
   const admin = useSelector(state => state.admin.admin);

   

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
     <header>
      <nav className="header">
        <div className="storeTitle">
          <h1>BookStore</h1><br />
          <h3> Store Capital: <span> {capital} $</span></h3>
        </div>

        <form style={{display : admin.isAdmin ? 'flex' : 'none'}} onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newBook.title || ""}
            placeholder="Title"
            onChange={handleChange}
          />
          <input
            type="url"
            name="image"
            value={newBook.image || ""}
            placeholder="Image"
            onChange={handleChange}
          />
          <input
            type="price"
            name="price"
            value={newBook.price || ""}
            placeholder="Price"
            onChange={handleChange}
          />
          <button>Add new book</button>
        </form>

        <div className="profile">
          <i>
            <BsPersonCircle />
          </i>
            <h1>{admin.isAdmin ? admin.username : text.state.user.username}</h1>
         
        </div>

        <div style={{display : admin.isAdmin ? 'none' : 'flex'}} className="cartSection">
          <Link to="/cart">
            {" "}
            <i>
              {" "}
              <GiWhiteBook />{" "}
            </i>
          </Link>
        </div>
      </nav>

      <Outlet />
    </header>
  )
}

export default HeaderNav