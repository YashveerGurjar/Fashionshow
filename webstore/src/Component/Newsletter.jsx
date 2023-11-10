import { styled } from "styled-components";
import  SendIcon from '@mui/icons-material/Send';
import { Mobile } from "./Responsive";
import axios from "axios";
import {useState } from "react";
function News(){
    var [inputdata, setInputdata] = useState("");
    console.log(inputdata);
    const sendMail = async (e) => {
        e.preventDefault();
        // const username=localStorage.getItem("username");
        const maildata = {
            inputdata
        }
        const res = await axios.post("http://localhost:5000/api/Mail", maildata);
        // console.log("data after sending mail",res.status);
        if (res.status===200){
            setInputdata("");
            alert("Message Sent");
        }
       
    }
  

    return(
        <Container>
                <Title>
                    LIKE TO UPDATE
                </Title>
                <DES>
                    get timely update about your favourite product
                </DES>
          
                <Inputcontainer>
                <Input placeholder="Your Email ?" value={inputdata} type="Email" onChange={(e) => setInputdata(e.target.value)}/>
                <SendIcon onClick={sendMail} style={{fontSize:"30px",marginTop:"5px",marginLeft:"4px",color:"#fff",cursor:"pointer"}}></SendIcon>
                </Inputcontainer>
        </Container>
    )
}

const Container=styled.div`
height:50vh;
width:70%;
background-color:#e9e8e6;
color:black;
margin:auto;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
${Mobile({marginTop:"10px",height:"30vh",width:"80%"})};
`;

const Title=styled.div`
font-size:3rem;
font-weight:300;
letter-spacing:1px;
${Mobile({fontSize:"30px"})};
`;

const DES= styled.div`
font-size:1rem;
padding:12px;
${Mobile({fontSize:"12px"})};


`;
const Input=styled.input`
flex:8;
padding:10px;

`;

const Inputcontainer=styled.div`
width:30%;
display:flex;
background-color:#54c1bf;
${Mobile({width:"80%"})};

`;


export default News;