import { createSlice } from "@reduxjs/toolkit";

const capitalSlice = createSlice({

    name:'capital',
    initialState:{capital:100000},

    reducers:{
      plusToCapital:(state, capital) =>{
        state.capital += capital.payload
      },

      minusToCapital :(state, capital) =>{
        state.capital -= capital.payload
      }


    }
});

export const {plusToCapital, minusToCapital} = capitalSlice.actions;
export default capitalSlice.reducer
