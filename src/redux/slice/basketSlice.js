import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: { 
    baskets: ["ss"] 
},
  reducers: {
    addBasket: (state, action) => {
      console.log(action);
      state.baskets = action.payload;
      
    },
  },
});

export const { addBasket } = basketSlice.actions;
export default basketSlice.reducer;
