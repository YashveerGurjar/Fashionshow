import { styled } from "styled-components";
import { Mobile } from "./Responsive";
import {NavLink } from "react-router-dom";

function CategorieItem({ value }) {
    return (
        <Container>
            <NavLink to={`/Product/${value.cat}`}>
            <Wrapper>
                <Image src={value.img} />
                <Info>
                    <Title>{value.title}</Title>
                </Info>
            </Wrapper>
            </NavLink>
            
        </Container>
    )
}
const Container = styled.div`
flex:1;
display:flex;
justify-content:center;

`;

const Wrapper = styled.div`
height:275px;
width:250px;
flex:1;
overflow: visible;
transition:all 0.5s ease;
justify-content:space-between;  
display:flex;
flex-direction: column;
align-items: center;
${Mobile({ height: "200px", width: "180px", marginLeft: "1px auto" })};

`;
const Image = styled.img`
display:flex;
border-radius:50%;
height:200px;
width:220px;
transition:all 0.5s ease;
background-color: white;
z-index: 999;
border:2px solid gold;
&:hover{ 
    opacity:0.7;
    height:210px;
    width:230px;   
}
${Mobile({ height: "150px", width: "160px", })};
`;

const Title = styled.h2`
text-align:center;
text-decoration: none;
`;

const Info = styled.div`
${Mobile({ fontSize: "10  px" })};
`;

export default CategorieItem;