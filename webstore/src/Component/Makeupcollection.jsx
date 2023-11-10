import { styled } from "styled-components";
import Makeup from "./Makeupitems";
import {beautyfashion} from "./data";
import { Mobile } from "./Responsive";

function BeautyCollection() {
    return (
        <Beautyitem>

            <Title > BEAUTY BRIGADE</Title>

            <Component>
                {
                        beautyfashion.map((kidsdata) => (
                        <Makeup item={kidsdata} />))
                }
            </Component>
        </Beautyitem>
    )
}
const Beautyitem = styled.div`
 `;

const Component = styled.div`
display:flex;
margin-top:0px;
${Mobile({flexDirection:"row",flexWrap:"wrap"})};
/* background-color:red; */
  `;

const Title = styled.h1`
 margin: 50px;
 margin-bottom:40px;
 color:#f5bf03;
 
 ${Mobile({margin:"30px 60px"})};
 text-align:center;
 /* background-color:red; */
 `;


export default BeautyCollection;