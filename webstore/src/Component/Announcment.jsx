import styled from "@emotion/styled";
import 'animate.css';
import { Mobile } from "./Responsive";

function Announcement(){
    return(
        <Container>
            
               <span className="animate__animated animate__zoomIn animate__infinite infinite">Super Deal! Free Shipping on Order Over $50</span> 
        </Container>
    )
}
export default Announcement;

const Container=styled.div`
display:flex;
background-color:#88BDBC;
justify-content:center;

color:white ;
font-weight:bold;
height:30px;
align-items:center;
letter-spacing:2px;
z-index:999;
${Mobile({fontSize:"12px",})};

`;
