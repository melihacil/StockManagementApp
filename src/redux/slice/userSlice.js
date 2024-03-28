import { createSlice } from "@reduxjs/toolkit";
import users from '../../users.json'


const userSlice = createSlice({

    name:"products",
    initialState:users,
    reducers:{

    }


})

export default userSlice.reducer; 