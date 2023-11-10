import { styled } from "styled-components";
import { Mobile } from "./Responsive";
import { NavLink } from "react-router-dom";
function MixProduct({ item }) {
    let seller = localStorage.getItem('Seller');
    // console.log("======>",item);
    return (
        <>

            {seller === "false" ?
                <Container>
                    <NavLink to={`/Product/data/${item._id}`}>
                        <Wrapper>

                            <Image src={item.img} />

                        </Wrapper>
                    </NavLink>
                </Container>

                :
                <Container>
                    <Wrapper>

                        <Image src={item.img} />

                    </Wrapper>
                </Container>

            }
        </>
    )

}

const Container = styled.div`
flex:1;
display:flex;
`;

const Wrapper = styled.div`
height:300px;
display:flex;
width: 320px;
flex:1;
overflow: visible;
transition:all 0.5s ease;
justify-content:space-between;  
align-items:center;
${Mobile({ height: "200px", width: "155px", justifyContent: "space-between", margin: "1px auto" })};
/* background-color: red; */    


`;
const Image = styled.img`
height:250px;
width:230px;
transition:all 0.5s ease;
z-index: 999;
box-shadow:2px 3px grey;
${Mobile({ height: "180px", width: "150px", objectFit: "content" })};

&:hover{ 
    opacity:0.7;
    height:280px;
    width:250px;
    
}
`;


export default MixProduct;