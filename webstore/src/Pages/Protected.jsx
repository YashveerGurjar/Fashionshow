import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Protected(props){
    const {Component}=props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login=localStorage.getItem("login");
        console.log("🚀 ~ file: Protected.jsx:9 ~ useEffect ~ type:", login)
        if(login==="false"){
          navigate("/Login");
        }
    },[])
    return(
        <div>
        <Component />
        </div>
    )
}
export default Protected;