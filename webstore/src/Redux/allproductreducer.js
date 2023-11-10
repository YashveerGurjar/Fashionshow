import { createSlice } from '@reduxjs/toolkit';

const ProductSlice = createSlice({
    name: "Product",
    initialState: {
        allData:[],
        isFetching:false,
        error:false,
    },
    reducers: {
        Start:(state)=>{
            state.isFetching=true;
        },
        Success:(state,action)=>{
            state.isFetching=false;
            state.allData=action.payload;
        },
        Fail:(state)=>{
            state.isFetching=false;
            state.error=true;

        },    
    },
})
export default ProductSlice.reducer;
export const { Start,Success,Fail } = ProductSlice.actions;