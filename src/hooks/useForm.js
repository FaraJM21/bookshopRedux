import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import uniqid from "uniqid";
import { isAdmin } from "../redux/adminReducer";
import { logedIn } from "../redux/islogedReducer";
import { addUser } from "../redux/usersReducer";

function useForm(navigation) {

  const [user, setUser] = useState({});
  let dispatch = useDispatch();
  let allUsers = useSelector((state) => state.users);
  let admin = useSelector((state) => state.admin);
  let navigate = useNavigate();

 

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value, id: uniqid(), book:[]});

    if (navigation === "register") {
      let btn = document.querySelector("button");
      let name = document.getElementById("name").value;
      let username = document.getElementById("username").value;
      let email = document.getElementById("email").value;
      let psw = document.getElementById("psw").value;

      if (name && username && email && psw.length >= 8) {
        btn.disabled = false;
      } 
      
      
      else {
        btn.disabled = true;
      }
    }
    
    
    else {
      let btn = document.querySelector("button");
      let username = document.getElementById("username").value;
      let psw = document.getElementById("psw").value;

      if (username && psw.length >= 8) {
        btn.disabled = false;
      } 
      
      
      else {
        btn.disabled = true;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       
   
    if (navigation === "register") {
      dispatch(addUser(user));
      setUser({});
      navigate("/", );
    }


   else if (navigation === "login") {

      if (allUsers.find((users)=>{
        return users.psw ===  user.psw && users.username === user.username
      }) ) 
      {

        let username = allUsers.find(users => users.username === user.username)
        dispatch(isAdmin(false))
        dispatch(logedIn(true));
        navigate("/bookstore", {state:{user:username}});
      
       
      } 
      
    else if (
        user.psw === admin.admin.psw &&
        user.username === admin.admin.username
       
      ) 
      {
       
        dispatch(logedIn(true));
        navigate("/bookstore");
      }
    }


  };

  return [user,  handleChange, handleSubmit];
}

export default useForm;
