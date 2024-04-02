import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: { 
    baskets: [{
      product:'',
      irnumber:'',
      miktar:'',
      garanti:'',
      durum:'Onay Bekliyor',
      user:'Test',
      date:'',

    },
  ], 
},
  reducers: {
    addBasket: (state, action) => {
      //console.log(action);
      //state.baskets.push({id:'3', title:'test', completed:false})
      state.baskets.push(action.payload)
      
    },
    updateBasket: (state, action) => {
      //console.log(action);
      //state.baskets.push({id:'3', title:'test', completed:false})
      //state.baskets.push(action.payload)
      console.log("Updated");
      
    },
  },
});

export const { addBasket, updateBasket } = basketSlice.actions;
export default basketSlice.reducer;
