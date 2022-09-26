import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: { admin: { username: "Admin", psw: "admin2022", isAdmin:true } },
  
  reducers: {
   isAdmin:(state, text)=>{
      state.admin.isAdmin = text.payload
    },

    
  },
 
  
});

export const {isAdmin} = adminSlice.actions;
export default adminSlice.reducer;