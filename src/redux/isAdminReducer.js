import { createSlice } from "@reduxjs/toolkit";


const isAdminSlice = createSlice({
    
    name: "isAdmin",
    initialState : { isAdmin : true},

    reducers:{

        isAdmin:(state, text)=>{
          state.isAdmin = text.payload
        }
    }


});

export const { isAdmin} = isAdminSlice.actions;
export default isAdminSlice.reducer