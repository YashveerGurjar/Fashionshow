import { createSlice } from '@reduxjs/toolkit';

const SellerSlice = createSlice({
    name: "Seller",
    initialState: {
        Sellerproduct: [],
    },
    reducers: {
        addSeller(state, action) {
            state.Sellerproduct.push(action.payload);
        }
    },
        removeSeller(state, action) {
        state.Sellerproduct.splice(action.payload, 1);
    }
}
)
export default SellerSlice.reducer;
export const { addSeller, removeSeller} = SellerSlice.actions;