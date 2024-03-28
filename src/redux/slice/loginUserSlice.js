import { createSlice } from "@reduxjs/toolkit";


const loginUserSlice = createSlice({

    name:"loginuser",
    initialState:{username:""},
    reducers:{

        addLoginUser:(state, action) => {
            console.log("--------------");
            console.log(action);
            
            state.username = action.payload;
            
        }

    }


})

export const {addLoginUser} = loginUserSlice.actions;
export default loginUserSlice.reducer;