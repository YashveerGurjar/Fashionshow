import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Footer from "../Component/Footer";
import { styled } from "styled-components";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Mobile } from "../Component/Responsive";
import { useLocation } from 'react-router-dom';
import axios, { all } from 'axios';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/CartRedux";
import StripeCheckout from 'react-stripe-checkout';
// import { Popover, Typography } from "@mui/material";
// import { publicRequest } from "../RequestMethod";

function SingleProduct() {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1);
    const [sizedata, setSizedata] = useState();
    const [colordata, setColordata] = useState();
    const [open, setOpen] = React.useState(false);
    const allsizes = ['s','m','l','xl']
    const [product, setProduct] = useState({});

    const location = useLocation();
    const id = (location.pathname.split("/")[3]);
    // const pathid = (location.pathname);
     console.log("pathid is =",id);
    const prodData= JSON.parse(localStorage.getItem(`productData`));
    // console.log("product data =",prodData);

    const getProduct = async () => {
        const res = await axios.get(`http://localhost:5000/api/product/find/${id}`);
        console.log("hi",res.data)
        setProduct(res.data);
        localStorage.setItem(`productData`, JSON.stringify(res.data));
    }
    useEffect(() => {
      
        getProduct();

    },[]);

    function handelQuantity(type) {
        if (type === "inc") {
            setQuantity(quantity + 1);
        } else {
            quantity > 1 && setQuantity(quantity - 1);
        }

    }
    function getSize(val) {


        setSizedata(val);

    }
    function getColor(val) {


        setColordata(val);

    }
    const handleClose = () => {
        setOpen(false);
      };
    
    function addToCart() {
        if (!colordata && !sizedata) {
            alert("please select color and size for your Product");
        } else {
            dispatch(addCart({ ...product, quantity, sizedata, colordata }))
            setOpen(true);
              
            
        }
    }
    console.log("data in size data", sizedata);
    console.log("data in colordata", colordata);
    console.log("quantity in Product page", quantity);
    return (
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />

                </ImageContainer>
                <InfoContainer>
                    <Info1>
                        {product.title}
                    </Info1>
                    <Info2>
                        {product.info}
                    </Info2>
                    <Info3>
                        ₹{product.amount}

                        <Mrp>
                            {product.mrp}
                        </Mrp>
                        <Rate>
                            ₹{product.price}
                        </Rate>
                        <Off>
                            {product.off}
                        </Off>
                    </Info3>

                    <Info4>
                        {product.tax}
                    </Info4>
                    Select Color
                    <Color>

                        {
                            prodData && prodData.color.map((item) => (
                                <Colortype onClick={(e) => (getColor(e.target.value))} bg={item} value={item}></Colortype>
                            ))
                        }
                    </Color>

                    <ValueContainer>
                        <AddIcon onClick={() => { handelQuantity("inc") }}></AddIcon>
                        {quantity}
                        <RemoveIcon onClick={() => handelQuantity("dec")}></RemoveIcon>
                    </ValueContainer>

                    <SizeContainer>
                        Select Size

                        <SizeType >
                            
                            {/* {
                                prodData && prodData.size.map((item) => {
                                   return(
                                    <>
                                    {console.log(allsizes.filter((i)=>i === item))}
                                    <Size onClick={(e) => (getSize(e.target.value))} value={item}>{item}</Size>
                                    </>
                                    
                                   ) 
                                })
                            } */}
                            {
                                prodData && allsizes.map((item) => {
                                    // console.log("hi thsi is all sizes")
                                    const check = prodData.size.includes(item)
                                    console.log(item,check)
                                    if(check) {
                                        return <Size onClick={(e) => (getSize(e.target.value))} value={item}>{item}</Size>
                                    }else {
                                       return <Size value={item} style={{color:"gray"}}>{item}</Size>
                                    }
                                })
                            }
                        </SizeType>
                    </SizeContainer>
                    <DESC>
                        {product.desc}
                    </DESC>
                    <Btn>
                        <StripeCheckout
                            name="Fashion show"
                            billing address
                            shippingAddress
                            description='your total is 100'
                            amount={100}

                            stripeKey="pk_test_51NxRRySGdJUYmKpcjA7zghgzYRWUIidZ69P9y5rmn73Xj4QvLc34SiwndjaE5NxddvdIJj9puEJ2XPYpRhXNZUlG00cTWK8zDe">
                            <Btn1>
                                Buy Now
                            </Btn1>
                        </StripeCheckout>

                        <Btn2 onClick={addToCart}>
                            <IconButton aria-label="cart">

                                <ShoppingCartIcon style={{ color: '#000' }} />

                            </IconButton>
                            Add To Cart
                            </Btn2>
                            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            Product added to Cart.
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="alert-dialog-description"> */}
        {/* Product added to Cart. */}
          {/* </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button sx={{border:"1px solid black"}}onClick={handleClose} autoFocus>
            done
          </Button>
        </DialogActions>
      </Dialog>

                    </Btn>
                </InfoContainer>

            </Wrapper>
            <Footer />
        </Container>

    )


}
const Container = styled.div``;
const Wrapper = styled.div`
display:flex;
height:100vh;   
${Mobile({ flexDirection: "column" })};
`;

const ImageContainer = styled.div`
flex:1;
height:100%;
width:100%;
/* background-color:red; */
`;

const Image = styled.img`
height:90vh;
width:80%;
${Mobile({ height: "40vh" })};
`;


const InfoContainer = styled.div`
flex:1;
/* background-color:pink; */
height:100%;
width:100%;
`;

const Info1 = styled.h2`
`;
const Info2 = styled.p`
font-weight:300;
`;

const Info3 = styled.div`
display:flex;
/* justify-content:center; */
align-items:center;
`;
const Mrp = styled.div`
font-weight:200;
color:"red";
display:flex;
align-items:center;
padding-left:5px;
`;
const Rate = styled.p`
font-weight:100;
text-decoration: line-through;
display:flex;
align-items:center;
`;

const Off = styled.div`
font-weight:bold;
font-size:"50px";
color:#219c1a;
`;
const Info4 = styled.p`
font-weight:100;
`;

const SizeContainer = styled.div`
display: flex;
flex-direction: column;
`;

const SizeType = styled.div`
display:flex;
// justify-content:space-between;

width:50%;
padding:20px 0px ;
`;

const Size = styled.button`
height:30px;
width:35px;
display: flex;
justify-content: center;
align-items: center;
border:1px solid #25435A ;
border-radius: 10px;
cursor: pointer;
margin-left:10px;
background-color:white;
  transition: all 0.5s ease;
&:hover{
    background-color: #88BDBC;
    border:1px solid transparent;
}
`;

const DESC = styled.div`
font-weight:300;
`;

const Btn = styled.div`
display:flex;
justify-content:space-between;
padding-right:100px;
padding-top:50px;
${Mobile({ padding: "10px" })};
`;

const Btn1 = styled.button`
height:50px;
width:200px;
cursor: pointer;
border:1px solid #88BDBC;
background-color:#fff;
font-weight:bold;
border-radius:10px;
${Mobile({ width: "150px" })};
/* transition: all 0.5s ease; */
&:hover{
    
   background-color:#88BDBC;
}

`;
const Btn2 = styled.button`
height:50px;
width:200px;
border:1px solid #88BDBC;
background-color:#88BDBC;
font-weight:bold;
border-radius:10px;
transition: all 0.5s ease;
cursor: pointer;
${Mobile({ width: "150px" })};

&:hover{
    color:#000;
    background-color:#fff;
    /* border:1px solid #88BDBC; */
}
`;
const Color = styled.div`
display:flex;
align-items:center;
height:50px;
width:100%;

`;

const ValueContainer = styled.div`
display:flex;
align-items:center;
margin:10px;
`;
const Value = styled.div`
border-radius:10%;
/* background-color:green; */
width:15px;
text-align:center;
`;

const Colortype = styled.button`
height: 35px;
cursor: pointer;
margin:5px;
width:35px;
border-radius: 50%;
background-color: ${(props) => props.bg};
border:1px solid black;
`;
export default SingleProduct;