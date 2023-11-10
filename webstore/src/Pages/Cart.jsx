import { styled } from "styled-components";
import Footer from "../Component/Footer";
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../Redux/CartRedux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Cart() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const cart = useSelector((state) => state.cart)
    
    return (
        <Container>
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                <Top>
                    <TopButton onClick={()=>{navigate("/Product")}} >Continue Shopping </TopButton>

                    {/* <TopTexts>

                        <TopText> Shopping bag (2)</TopText>
                        <TopText> Shopping Whishlist(0) </TopText>

                    </TopTexts> */}

                    {/* <TopButton type={"right"}>Checkout</TopButton> */}

                </Top>
                <Buttom>
                    <Info>
                        {cart.product.map((data,index) => (<Product>
                            <ProductDetail key={index}>
                                <Image src={data.img} />
                                <Detail>
                                   
                                    <Pname><b>product:</b>{data.info}</Pname>
                                    <Pid> <b>ID:</b>{data._id}</Pid>
                                    <Psize><b>Size:</b>{data.sizedata}</Psize>
                                    <b>Color:</b>
                                    <ProductColor bg={data.colordata}></ProductColor>
                                </Detail>
                            </ProductDetail>

                            <PriceDetail>
                                <ProductAmountContainer>

                                    <ProductAmount>{data.quantity}</ProductAmount>

                                </ProductAmountContainer>
                                <ProductPrice><b> ₹</b>{data.amount}</ProductPrice>
                            </PriceDetail>
                            <div style={{marginRight:"20px"}}><HighlightOffIcon onClick={()=>dispatch(removeCart(index))}/></div>
                        </Product>))

                        }
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>{cart.total==0 ? "₹00 ": "₹100"}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice> {cart.total==0 ? "₹00 ": "₹100"}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText tpe="total"> Total</SummaryItemText>
                            <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <ButtonContainer>
                             <StripeCheckout
                            name="Fashion show"
                            billing address
                            shippingAddress
                            description='your total is 100'
                            amount={100}

                            stripeKey="pk_test_51NxRRySGdJUYmKpcjA7zghgzYRWUIidZ69P9y5rmn73Xj4QvLc34SiwndjaE5NxddvdIJj9puEJ2XPYpRhXNZUlG00cTWK8zDe">
                          <Button>Buy</Button>
                        </StripeCheckout>

                            
                        </ButtonContainer>
                    </Summary>
                </Buttom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
const Container = styled.div`
background-color:#fff;
`;
const Wrapper = styled.div`
padding:20px;
margin-top:35px;
`;
const Title = styled.div`
text-align:center;
font-weight:300;
`;
const Top = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:20px;
`;

const TopButton = styled.button`
padding:10px;
cursor: pointer;
border-radius:10px;
color:${(props) => props.type === "right" ? "black" : "white"};
background-color:${(props) => props.type === "right" ? "red" : "green"};
border:${(props) => props.type === "right" && "2px solid black"};

`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
text-decoration:underline;
cursor: pointer;
margin:0 10px;
`;
const Buttom = styled.div`
display:flex;
justify-content:space-between;
`;
const Info = styled.div`
flex:3;
`;

const Product = styled.div`
display:flex;
justify-content:space-between;
`;

const ProductDetail = styled.div`
flex:2;
display:flex;
`;

const Detail = styled.div`
display:flex;
flex-direction:column;
padding:20px;
justify-content:space-around;
font-size:20px;
font-weight:300;
`;

const Image = styled.img`
width:250px;
height:250px;
`;

const Pname = styled.span`
`;

const Pid = styled.span`
`;

const Psize = styled.span`
`;

const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction: column;
justify-content:center;
font-size:25px;

align-items:center;
`;
const ProductColor = styled.div`
height:20px;
width:20px;
border-radius:50px;
background-color:${(props) => props.bg};
border:1px solid black;
`;

const ProductAmountContainer = styled.div`
display:flex;
align-items:center;
padding:20px;
`;
const ProductPrice = styled.div`
font-weight:bold;
font-size:30px;`;
const ProductAmount = styled.div`
margin:10px;
`;
const Hr = styled.hr`
/* border:1px dotted grey;
background-color:#e5e1e1;
*/
`;
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
/* height:407px; */
padding:20px;
box-sizing:border-box;
position:relative;
`;
const SummaryTitle = styled.h1`
font-weight:400;
`;
const SummaryItem = styled.div`
display:flex;
justify-content:space-between;
`;
const SummaryItemText = styled.span`
margin:22px 0px;
`;
const SummaryItemPrice = styled.span`
margin:22px 0px;
`;
const ButtonContainer = styled.div`
text-align:center;
position:absolute;
bottom:0;
width:100%;
`;
const Button = styled.button`
background-color:green;
height:40px;
width:200px;
font-weight:bold;
&:hover{
    color:#fff;
}
`;

export default Cart;