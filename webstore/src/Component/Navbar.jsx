import React, { useState } from "react";
import { Grid, AppBar, Toolbar, Typography, Tab, Tabs, Box, Button, useTheme, useMediaQuery, } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from "./Drawer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
function Navbar() {
    const quan = useSelector((state) => state.cart.quantity)
    let checkLogin = localStorage.getItem('login');
    // console.log("quantity in state",quan);
     let Seller= localStorage.getItem('Seller');
    const navigate = useNavigate();
    const links = ["Products", "About Us"]
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
    // console.log(isMatch);
    const [value, setValue] = useState();
    const cartValue = JSON.parse(localStorage.getItem('carttty'));
    function handleSignout() {
        localStorage.setItem('login', false);
        navigate("/Login");
    }
    return (
        <AppBar sx={{ backgroundColor: "#fff", position: "sticky", top: "0" }}>
            <Toolbar>
                {isMatch ? <>

                    <DrawerComp links={links} />

                    <ShoppingCartCheckoutIcon sx={{ marginLeft: "auto", placeItems: "center", fontSize: "30px", }} />

                </> : <Grid container sx={{ placeItems: "center" }}>
                    <Grid item xs={4}>
                        <Typography sx={{ color: '#25435A', fontSize: "30px", fontFamily: 'cursive', fontWeight: 'bold' }}>
                            Fashion show
                        </Typography>
                    </Grid>
                    <Grid item xs={1}></Grid>

                    <Grid item xs={2}>
                    </Grid>

                    <Grid item xs={1}  />
                    {checkLogin === "true" ?
                        <Grid item lg={4}>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems:"center"}}>
                                {Seller==="true" ?
                            <Button sx={{ marginLeft: "auto", backgroundColor: "#88BDBC"}} onClick={() => { navigate("/Addproduct") }}
                                    variant="contained">Add Product</Button>
                                    :
                                    null
                                }
                                <Button onClick={handleSignout} 
                                    sx={{ marginLeft: 2, backgroundColor: "#88BDBC" }}
                                    variant="contained">Sign out</Button>
                                <Badge badgeContent={quan} color="success" >
                                    <ShoppingCartCheckoutIcon onClick={() => { navigate("/cart") }}
                                        sx={{ cursor: 'pointer', marginLeft: 3, placeItems: "center", fontSize: "30px", color: '#000' }} />
                                </Badge>
                            </Box>
                        </Grid>
                        :
                        <Grid item lg={4}>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems:"center"}} >                          
                              <Button onClick={() => { navigate("/Login") }}
                                    sx={{ marginLeft: "auto", backgroundColor: "#88BDBC" }}
                                    variant="contained">Login</Button>
                                <Button onClick={() => { navigate("/Register") }}
                                    sx={{ marginLeft: 2, backgroundColor: "#88BDBC" }}
                                    variant="contained">Rigester</Button>

                            </Box>
                        </Grid>                     
                    }
                </Grid>
                }
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;


// import { styled } from 'styled-components';
// import Badge from '@mui/material/Badge';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { Mobile } from './Responsive';
// import { Pad } from './Responsive';
// import 'animate.css';
// import { useNavigate } from 'react-router-dom';
// function Navbar() {
//     const navigate=useNavigate();
//     return (
//         <Container>
//             <Wrapper>
//                 <Center >
//                     Fashion Show
//                 </Center>

//                 <Right>
//                     <Item onClick={()=>{navigate("/Login")}}> 
//                         Login
//                     </Item>

//                     <Item onClick={()=>{navigate("/Register")}}>
//                         Register
//                     </Item>

//                     <Item onClick={()=>{navigate("/Cart")}}>
//                         <IconButton aria-label="cart">
//                             <StyledBadge badgeContent={1}>
//                                 <ShoppingCartIcon  style={{color:'orange' }}/>
//                             </StyledBadge>
//                         </IconButton>
//                     </Item>
//                 </Right>
//             </Wrapper>
//         </Container>
//     )
// }
// export default Navbar;

// const Container = styled.div`
// height:40px;
// background-color:#25435A ;
// color:white;
// `;
// const Wrapper = styled.div`
// display:flex;
// height:40px;
// justify-content:space-around;
// padding:0px 10px;
// align-items: center; 
// cursor:pointer;
// ${Mobile({height:"50px"})};


// `;

// const Center = styled.div`

// /* display:flex; */
// font-size:25px;
// font-weight:200;
// letter-spacing:1px;
// color:#fff;
// font-family: 'Rye', cursive;
// text-shadow:3px 4px grey;
// ${Mobile({fontSize:"1rem"})};
// ${Pad({fontSize:"12px"})};


// `;
// const Right = styled.div`
// flex:1;
// display:flex;
// align-items:center;
// justify-content:flex-end;


// `;

// const Item = styled.div`
// margin:10px;
// justify-content:flex-end;
// margin-right:50px;
// ${Mobile({margin:"5px"})};
// ${Pad({fontSize:"12px"})};

// `;
// const StyledBadge = styled(Badge)(({ theme }) => ({
//     '& .MuiBadge-badge': {
//         right: -3,
//         top: 5,
//         border: `2px solid white `,
//         padding: '0 4px',
//         color:'orange',
//     },
// }));