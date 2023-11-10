import 'animate.css';
import { styled } from "styled-components";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {slideData} from './data';
import { useState } from 'react';
import { Mobile } from './Responsive';
import { useNavigate } from 'react-router-dom';
// import { Container } from '@mui/material';

function Slider() {
    const navigate=useNavigate();
    const[index,setIndex]=useState(0);
    
    function leftclick(direction) {
        console.log(direction);
        if(direction ==="Left"){
            setIndex(index > 0 ? index-1 : slideData.length-1);
            console.log(index);
        }
        else{
            setIndex(index < slideData.length -1 ? index+1 : 0);
            console.log(index);
        }
    }

    return (
        <>

            <Wrapper>
                <Arrow direction="left" onClick={() => leftclick("Left")}>
                    <ArrowCircleLeftIcon style={{ fontSize: "65px" }} />
                </Arrow>

                <Container slideIndex={index}>
                 {slideData.map((value)=>
                 
                        <Slide bg={value.bgcolor}>
                        <ImgContainer>
                            <Img src={value.img} />
                        </ImgContainer>

                        <InfoContainer>
                            <Title1> {value.title1} </Title1>
                            <Title2> {value.title2} </Title2>
                            <Title3> {value.title3} </Title3>
                            <Title4 className="animate__animated animate__heartBeat animate__infinite infinite "> {value.title4} </Title4>
                            <Title5> {value.title5} </Title5>
                            <Button onClick={()=>{navigate("/Product")}}> Buy Now</Button>
                        </InfoContainer>
                    </Slide>
               )}
                    
                </Container>

                <Arrow direction="right" onClick={() => leftclick("Right")}>
                    <ArrowCircleRightIcon style={{ fontSize: "65px" }} />
                </Arrow>
            </Wrapper>

            <Offer>
                <Head1>ORIGINAL PRODUCTS</Head1>
                <Head2>EASY RETURNS & REFUNDS</Head2>
                <Head3>100% SECURE PAYMENTS </Head3>
            </Offer>

        </>

    );

}
const Container = styled.div`
height:100%;
display:flex;
transition:all 1s ease ;
transform:translateX(${(props)=>props.slideIndex *-100}vw);

`;
const Wrapper = styled.div`
width:95%;
border-radius: 50px;
height:81vh;
margin:0px auto;
display:flex;
position:relative;
overflow:hidden;
margin-top:10px;  
${Mobile({display:"none"})};
`;


const Arrow = styled.div`
color:grey;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${(props) => props.direction === "left" && "10px"};
right:${(props) => props.direction === "right" && "10px"};
z-index:2;
`;

const Slide = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color:${(props)=>props.bg};
    
`;

const ImgContainer = styled.div`
flex:1;
height:100%;


/* background-color:red; */
`;
const Img = styled.img`
height:100%;
width: 100%;

/* mix-blend-mode:multiply; */


`;
const InfoContainer = styled.div`
flex:1;
display: flex;
flex-direction: column;
height:100vh;
justify-content: center;
align-items:center;
margin-bottom: 90px;
/* z-index:1; */


`;
const Title1 = styled.h1`

color:#25435A;
font-family: 'Rye','Lobster', cursive;
font-weight:300
// font-family: 'Rye', cursive;
// font-family: 'Satisfy', cursive;
// font-family: 'Shrikhand', cursive;
// font-family: 'Wallpoet', cursive;
`;

const Title2 = styled.h2`
color:#25435A;
font-family: 'Rye','Lobster', 'cursive';
font-weight:300;
`;

const Title3 = styled.h2`
font-family: 'Dancing Script', 'cursive';
`;

const Title4 = styled.h3`
font-family: 'Dancing Script', 'cursive';
color:#25435A;
font-weight:bold;
`;
const Title5 = styled.h2`
font-family: 'Rye', 'cursive';

`;

const Button = styled.button`
height:40px;
width:100px;
border-radius:25%;
font-size:20px;
background-color:#88BDBC;
cursor:pointer;
&:hover{
    background-color:#25435A;
    color:white;
}
`;
// const OfferContainer = styled.div`
// display:flex;
// `;
const Offer = styled.div`
display:flex;
justify-content:center;
text-align:center;
// margin:10px;
z-index:-1;
${Mobile({fontSize:"8px",alignItems:"center",textWrap:"nowrap"})};


`;
const Head1 = styled.h3`
flex:1;
background-color:#88BDBC;
border-right:1px solid black;


`;
const Head2 = styled.h3`
flex:1;
background-color:#88BDBC;

`;
const Head3 = styled.h3`
flex:1;
background-color:#88BDBC;
border-left:1px solid black;
`;


export default Slider;