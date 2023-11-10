import { styled } from "styled-components";
import { Mobile } from "./Responsive";
import { useNavigate } from "react-router-dom";

function Mens({ item }) {
const navigate=useNavigate();
    return (

        <Container>
            <Wrapper onClick={()=>{navigate(`/Product/${item.cat}`)}}>
                <Image src={item.img} />

            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
flex:1;
display:flex;
`;

const Wrapper = styled.div`
height:275px;
width: 320px;
flex:1;
overflow: visible; 
transition:all 0.5s ease;
/* justify-content:space-between;   */
/* align-items:center; */
display: flex;
justify-content: center;
align-items: baseline; 
${Mobile({ height: "200px", width: "180px" })};
/* background-color:black */

`;
const Image = styled.img`
height:250px;
width:230px;
transition:all 0.5s ease;
z-index: 999;

&:hover{ 
    opacity:0.7;
    height:280px;
    width:250px;  
}
${Mobile({ height: "200px", width: "180px", })};
`;


export default Mens;