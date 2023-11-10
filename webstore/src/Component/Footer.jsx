import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components";
import { Mobile } from "./Responsive";

const Container = styled.div`
    display:flex;
    background-color:#7dcccb;
    margin-top:30px;
    height:40vh;
    ${Mobile({flexDirection:"column",height:"75vh"})};
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    ${Mobile({flex:"0",padding:"10px",fontSize:"14px" })};
`
const Logo = styled.h1`
text-align:center;
${Mobile({fontSize:"20px"})}
`;

const Desc = styled.p`
    margin:20px 0;
    text-align:justify;
    ${Mobile({margin:"0px 0px"})};


`
const SocialContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:20px;
    ${Mobile({marginTop:"10px"})}
   
    


`
const  SocialIcon= styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:#fff;
    background:#${props=> props.color};
    display:flex;
    justify-content:center;
    align-items:center;
    cursor: pointer;
    
`
const Center = styled.div`
    flex:1;
    padding:20px;
    ${Mobile( {flex:"0",padding:"0px"})};
     

`
const Title = styled.h1`
    margin-bottom:30px;
    text-align:center;
    ${Mobile({fontSize:"20px",marginBottom:"20px"})};
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;
const ListItem= styled.li`
    width:50%;
    margin-bottom:10px;
    text-align:center;
`;

const Right = styled.div`
    flex:1;
    padding-top:20px;
`;
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
    padding:5px;
    margin-left:90px;
    ${Mobile({marginBottom:"5px"})};
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>ANIME</Logo>
            <Desc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                   remaining essentially unchanged.
            </Desc>           
        </Left>
      
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Traking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List> 
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter />
                </SocialIcon>
        </SocialContainer>        
        </Center>

        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 111 WTP  Road, GOVIND MARG 
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +91 9057065601
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> Yashveer@gmail.com
            </ContactItem>
        </Right>      
    </Container>
  )
}

export default Footer;