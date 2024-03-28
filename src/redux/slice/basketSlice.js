import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({

    name:"basket",
    initialState:[],
    reducers:{

        addBasket:(state, action) => {
            console.log(action);
        }

    }


})


export const {addBasket} = basketSlice.actions;
export default basketSlice.reducer;