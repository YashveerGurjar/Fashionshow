import { addSeller } from "./addProduct";
import { loginFail, loginStart, loginSuccess } from "./UserRedux";
import axios from "axios";

export const Loginapi = async (dispatch, user,owner) => {
    console.log("🚀 ~ file: Apicall.js:4 ~ Loginapi ~ owner:", owner)
    // console.log(user);
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:5000/api/Auth/Login",user)
        console.log("status is ===",res.status);
        if(owner === "Buyer" && res.data.isSeller === true || owner === "Seller" && res.data.isSeller === false ){
            const auth="auth"
            return  auth
        }
       else if(res.status === 200){
            dispatch(loginSuccess(res.data));
            localStorage.setItem("Seller",res.data.isSeller)
            const code = "Valid"
            return code
        } 
        else if(res.status === 201){
            const code = "User";
             return code
        }
        else {
            return false;
        }
    }
    catch (err) {
        dispatch(loginFail());
        return false
    }
}

export const Registerapi = async (dispatch, user) => {
    // console.log("data in user register",user);
    try {
        // console.log("user for register",user)
        const res = await axios.post("http://localhost:5000/api/Auth/Register",user)
        console.log("res data=",res);
        if(res.status === 201){
            alert("Successfully done")
            return true
        }else if(res.status === 200){
            alert(res.data.message)
            return false

        }else{
            alert("there is an issue in server")
        }
    }
    catch (err) {
        console.log(err);
    }

    return false
}
export const Addproductsapi = async (dispatch,product) => {
    dispatch(addSeller(product));
    
    console.log(product);
    // try {
    //     const res = await axios.post("http://localhost:5000/api/product/New",product)
    //     console.log(res.data);
    // }
    // catch (err) {
    //     console.log(err);
    // }
}