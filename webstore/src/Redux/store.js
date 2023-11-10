import cartReducer from './CartRedux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserRedux';
import  storage  from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import productReducer from './allproductreducer';
import sellerProduct from './addProduct'

const persistConfig={
    key:"root",
    verson:1,
    storage
}
const combineRedux=combineReducers({
    cart:cartReducer,
    user:userReducer,
   product:productReducer,
   sellerProduct:sellerProduct
})

const persist=persistReducer(persistConfig,combineRedux)

const store=configureStore({
    
    reducer:persist
    
})
console.log("data in store",store);
export default store;