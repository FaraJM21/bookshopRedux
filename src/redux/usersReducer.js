import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],

    
  reducers: {
    
    addUser: (state, user) =>{
      state.push(user.payload);
    },

    userBooks:(state, id)=>{
      
      
        state.map((user)=>{
         if(user.id === id.payload.id ){
          user.book.push(id.payload.book)
          
      
         }
         else{
          console.log('222');
         }
         return state
        })
    }

    
}
});

export const {addUser, userBooks} = userSlice.actions;
export default userSlice.reducer;