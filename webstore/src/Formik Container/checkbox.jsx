import React from 'react'
import { Field } from 'formik';
// import TypeError from './TypeError';
function Checkbox(props) {
    const {label,name,...rest}=props;
  return (
    <div >
        <label style={{fontSize:"20px"}} htmlFor={name}  >{label}</label>:<br></br>
        <Field  style={{margin:"10px 0",height:"30px",width:"30px"}} id={name} name={name} {...rest} /><br></br>
    </div>
  )
}
export default Checkbox