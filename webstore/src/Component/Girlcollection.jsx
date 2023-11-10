import { styled } from "styled-components";
import Girls from "./Girlitems";
import {womenfashion } from "./data";
import { Mobile } from "./Responsive";

function GirlCollection() {
    return (
        <Girlsitem>

            <Title > PIQS FOR WOMEN </Title>

            <Component>
                {
                        womenfashion.map((womendata) => (
                        <Girls item={womendata} />))
                }
            </Component>
        </Girlsitem>
    )
}
const Girlsitem = styled.div` 
 `;

const Component = styled.div`
display:flex;
margin-top:0px;
${Mobile({flexDirection:"row",flexWrap:"wrap"})};
  `;

const Title = styled.h1`
 margin:50px;
 margin-bottom:40px;
 text-align:center;
 color:#f5bf03;
 ${Mobile({margin:"30px 60px"})};
 /* background-color:red; */
 `;


export default GirlCollection;