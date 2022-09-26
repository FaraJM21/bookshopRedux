import { createSlice } from "@reduxjs/toolkit";


const islogedSlice = createSlice({
    
    name: "isLoged",
    initialState : { isLoged : true},

    reducers:{

        logedIn:(state, text)=>{
          state.isLoged = text.payload
        }
    }


});

export const {logedIn} = islogedSlice.actions;
export default islogedSlice.reducer