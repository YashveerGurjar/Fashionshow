// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Avatar } from '@mui/material';
import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loginapi } from "../Redux/Apicall";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FormikControl from "../Formik Container/FormikControl";
import { useState } from 'react';

export default function Login() {
  const [owner, setOwner] = useState("Buyer")

  const initialValues = {
    username: "",
    password: ""
  }
  const validationSchema = yup.object({
    username: yup.string().required("username is required!"),
    password: yup.string().required("password is required!")

  });
  const onSubmit = async (value) => {
    console.log("values", value);
    const username = value.username
    const password = value.password
    
    if (!username || !password) {
      alert("plzz fill the required details");
    } else {
      
      const loginData = await Loginapi(dispatch,{username,password},owner );

      if (loginData === "auth") {
        alert("sorry you are not authorized");
      }
      else if (loginData === "Valid") {
        localStorage.setItem("login", true);
        navigate("/");
      }
      else if (loginData === "User") {
        alert("Username is not valid")
      }
      else {
        alert("Password is not valid")
      }
    }
    
  }

  const { isfetching, error, currentUser } = useSelector((state) => state.user);
  console.log("data in userstate=", currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handellogin(value) {
    setOwner(value)
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: '#00acee' }}>
          <LockOpenIcon sx={{ margin: '50px' }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          {`Login as ${owner}`}
        </Typography>
        {/* <Box component="form" autoComplete="off" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
        < Container component="div" style={{ margintop: "50px" }}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
              formik =>
                <Form style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Box>
                    <FormikControl
                      control="input"
                      type="text"
                      name="username"
                      label="username"
                      autocomplete="off"
                      placeholder=" Username"
                    />
                  </Box>
                  <Box>
                    <FormikControl
                      control="input"
                      type="password"
                      name="password"
                      label="password"
                      placeholder="Password"
                    />
                  </Box>
                  {/* <button type="onSubmit">Submit</button> */}
                  <Button
                    type="onsubmit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={isfetching}
                  >
                    {`login as ${owner}`}
                  </Button>
                  <div style={{ display: "flex", justifyContent: "space-between", width: "400px", cursor: 'pointer' }}>
                    <Link sx={{ fontSize: "20px" }} onClick={() => handellogin("Buyer")}> As a buyer? </Link>
                    <Link sx={{ fontSize: "20px" }} onClick={() => handellogin("Seller")}> As a Seller?</Link>
                  </div>


                </Form>
            }
          </Formik>
        </Container>
      </Box>
    </Container>
  );
}

{/* <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"           
            autoFocus          
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          /> */}
{/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
{/* <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isfetching}
          > */}
{/* Sign In */ }
{/* </Button> */ }
{/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link sx={{ cursor: "pointer" }} variant="body2" onClick={() => navigate("/Register")}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
{/* </Grid> */ }
{/* </Box> */ }
