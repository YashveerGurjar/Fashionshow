import React from "react";
import {Grid,Paper,Avatar, Typography,TextField, Checkbox, Stack, Button} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import img from '../Image/reg1.jpg';
import { useDispatch } from "react-redux";
import { Registerapi } from "../Redux/Apicall";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
const nameRules=/^(?=.*[a-z])(?=.*[A-Z])/;


  const initialValues = {
    username: '',
    email: '',
    password: '',
    Checkbox: false
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('name is required').matches(nameRules,"name must meet the requirements ( 1 letter in uppercase and and other are  in lower lowercase)"),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password:Yup.string().required(" Please Enter Password").min(4, 'Password is too short ').matches(passwordRules,"Password must meet the requirements (1 symbol, 1 uppercase, 1 lowercase, 1 digit)"),


  });

  async function handleSubmit(values) {
    console.log("values",values);
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
      isSeller: values.Seller
    };
    console.log("🚀 ~ file: Register.jsx:36 ~ handleSubmit ~ data:", data)
    
    
    if (!data.username || !data.email || !data.password) {
      alert('Please fill in the required details');
    } else {
      const registerData = await Registerapi(dispatch, data);
      if (registerData) {
        navigate('/Login');
      }
    }
  }

  return (
    <Grid
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100vh',
      }}
    >
      <Paper
        elevation={0}
        align="center"
        sx={{ width: '500px', marginLeft: '90px', background: 'transparent' }}
      >
        <Avatar sx={{ bgcolor: '#00acee' }}>
          <LockOpenIcon sx={{ margin:'50px'}} />
        </Avatar>
        <Typography variant="h5" sx={{ margin: '20px', fontWeight: 'bold', bgcolor: '#00acee'}}>
          SignUP
        </Typography>
        <Typography sx={{ margin: '10px 0px 10px 0px' }}>Please fill this form</Typography>
        <Formik
        
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}

        >
          {
          formik =>
        
          <Form autoComplete="off" style={{ background: 'transparent',display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div>
              <label htmlFor="username">name</label>
              <Field style={{ margin:'5px 20px',display:"flex",alignItems:"center",flexDirection:"column",width:"300px",height:"40px"}}
                type="text"
                id="username"
                name="username"
                placeholder="name"
                
              />
              <ErrorMessage style={{margin:"10px",color:"red"}} name="username" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                style={{ marginTop:"5px" ,display:"flex",alignItems:"center",flexDirection:"column" ,width:"300px",height:"40px"}}
              />
              <ErrorMessage style={{ margin:"10px", color:"red"}} name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                style={{ marginTop: '5px',padding:"5px" ,display:"flex",alignItems:"center",flexDirection:"column",width:"300px",height:"40px"}}
              />
              <ErrorMessage style={{margin:"10px",color:"red"}} name="password" component="div" className="error" />
            </div>

              <div style={{display:"flex",alignItems:"center"}}>
            <Field  style={{height:"50px" ,width:"20px", }} 
                type="Checkbox"
                id="Checkbox"
                name="Seller" 
                         
              /> I am  Seller
            </div>
            <Stack spacing={2}>
              <Button type="submit" variant="contained" color="success">
                Register
              </Button>
              <Button type="reset" onClick={() => formik.resetForm()} variant="contained" color="error" >
                Cancel
              </Button>
            </Stack>
          </Form>
}
        </Formik>
      </Paper>
    </Grid>
  );
}

export default Signup;

  
//-------------------------------------------------------------------------------
// function Signup(){
//     const navigate=useNavigate()
//     const dispatch=useDispatch()
    // const [username,setUsername]=useState("")
    // const [email,setEmail]=useState("")
    // const [password,setPassword]=useState("")

//    async function  handelsubmit(e){
//             e.preventDefault();
//        const data={
// console.log("🚀 ~ file: Register.jsx:159 ~ handelsubmit ~ data:", data)
//         username,email,password
//        }     
//     //    console.log("data in register form==",data);
// console.log("🚀 ~ file: Register.jsx:163 ~ handelsubmit ~ data:", data)
// console.log("🚀 ~ file: Register.jsx:163 ~ handelsubmit ~ data:", data)

//        if(!username || !email || !password){
//         alert("plzz fill the required details");
//     }else{
// const registerData=await  Registerapi(dispatch,data)
// console.log("🚀 ~ file: Register.jsx:170 ~ handelsubmit ~ data:", data)
// if (registerData){
// setUsername("")
// setEmail("")
// setPassword("")
// navigate("/Login")
// }
// }
//     }
    // function handelCancel(e){
    //     e.preventDefault()
    //     setUsername("")
    //     setEmail("")
    //     setPassword("")
    // }
    

//     return(
//         <Grid style={{backgroundImage:`url(${img})`, backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed",height:"100vh"}}>
//             <Paper elevation={0} align="center" sx={{ width:"350px", marginLeft:"90px ",background:"transparent"}}>

//             <Avatar sx={{bgcolor:"#00acee",}}>
//                 <LockOpenIcon></LockOpenIcon>                
//             </Avatar>
//             <Typography variant="h5" sx={{margin:"10px",fontWeight:"bold",bgcolor:"#00acee"}}>
//                     SignUP
//                 </Typography>
//             <Typography sx={{margin:"10px 0px 10px 0px"}}>
//                     Please fill this form
//             </Typography>
//             <form onSubmit={handelsubmit} autocomplete="off" sx={{background:"transparent"}}    >
//             <TextField id="username" value={username} label="userName" variant="outlined" onChange={(e)=>setUsername(e.target.value)} fullWidth sx={{margin:"30px auto"}}/>
//             <TextField id="email"  value={email} label="email" variant="outlined"  onChange={(e)=>setEmail(e.target.value)} fullWidth sx={{margin:"30px auto"}}/>
//             <TextField type="password" value={password} id="password" label="password" variant="outlined"  onChange={(e)=>setPassword(e.target.value)} fullWidth sx={{margin:"30px auto"}}/>            
//             <Checkbox /> 
//             I agree on <a href="#"> terms & conditions </a>
//             <Stack spacing={2}>
//                 <Button type="submit" variant="contained" color="success">Register</Button>
//                 <Button  variant="contained" color="error" onClick={handelCancel} >Cancel</Button>
//             </Stack>
//             </form>
//             </Paper>
//         </Grid>
//     )
// }
// export default Signup;


//=========================================================================================


// / import { styled } from "styled-components";
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// function Register(){
//     return(
//         <Container>
//             <Wrapper>
//                 <Form>
//                     <h1> Register</h1>
//                     <label>First Name</label>
//                      <input type="text" placeholder="First Name"/>
//                      <label>Last Name</label>
//                      <input type="text" placeholder="Last Name"/>
//                      <label>User Name</label>
//                      <input type="text" placeholder="User Name"/>
//                      <label>Email</label>
//                      <input type="text" placeholder="Email"/>
//                      <label>password</label>
//                      <input type="text" placeholder="password"/>

//                     <Agg>
//                       By creating  an account you agree to our <a href="#home">terms & condition</a>.
//                     </Agg>

//                      <Btn>
//                     <Btn1>
//                         <HowToRegIcon></HowToRegIcon>
//                         Register
//                     </Btn1>
//                     <Btn2>
//                         Cancel
//                     </Btn2>
//                 </Btn>
//                 </Form>
                
//             </Wrapper>
            
//         </Container>
//     )
// }

// const Container =styled.div`
// height:100vh;
// width:100vw;
// display:flex;
// justify-content:center;
// align-items:center;
// background-repeat:no-repeat;
// background-size:cover;

// background-image:url('https://thumbs.dreamstime.com/b/womens-white-t-shirt-mockup-high-heels-grass-cotton-red-wild-sunglasses-lipstick-design-template-tee-print-presentation-245595073.jpg');

// `;
// const Wrapper =styled.div`
// height:80vh;
// width:30%;
// background-color:transparent;
// backdrop-filter: blur(5px);
// `;

// const Form =styled.form`
// display:flex;
// justify-content:center;
// align-items:center;
// flex-direction:column;

// input{
//     height:20px;
//     width:300px;
//     padding:5px;
//     margin:10px;
//     border:1px solid #88BDBC;
//     &:hover{
//        border:1px solid transparent;
//         background-color:#25435A;
//         color:#fff;
//     }
// }
// `;

// const Agg =styled.p`
// margin-left:30px;
// /* padding:5px; */
// /* background-color:red; */
// width:80%;
// `; 

// const Btn= styled.div`
//  display:flex;
// justify-content:space-between;
// align-items:center;
// width:80%;
// margin:10px;
// `;

// const Btn1 = styled.button`
// height:35px;
// width:100px;
// cursor: pointer;
// border:1px solid #25435A;
// background-color:#fff;
// font-weight:bold;
// border-radius:10px;
// display:flex;
// align-items:center;

// &:hover{   
//    background-color:#25435A;
//    color:#fff;
// }
// `;

// const Btn2 = styled.button`
// height:35px;
// width:100px;
// border:1px solid #25435A;
// background-color:#25435A;
// font-weight:bold;
// border-radius:10px;
// transition: all 0.5s ease;
// cursor: pointer;
// &:hover{  
//     color:#fff;
//  }
// `;


// export default Register;