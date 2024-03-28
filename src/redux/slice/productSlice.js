import { createSlice } from "@reduxjs/toolkit";
import data from '../../db.json'


const productSlice = createSlice({

    name:"products",
    initialState:data,
    reducers:{

    }


})

export default productSlice.reducer;