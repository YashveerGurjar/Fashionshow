import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: "User",
    initialState: {
        currentUser:null,
        isFetching:false,
        error:false,
    },
    reducers: {
        loginStart:(state)=>{
            state.isFetching=true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload;
        },
        loginFail:(state)=>{
            state.isFetching=false;
            state.error=true;

        },    
    },
})
export default UserSlice.reducer;
export const { loginStart,loginSuccess,loginFail } = UserSlice.actions;