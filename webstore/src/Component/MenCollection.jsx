import { styled } from "styled-components";
import Mens from "./Mensitem";
import { menfashion } from "./data";
import { Mobile } from "./Responsive";

function MenCollection() {
    return (
        <Mensitem>

            <Title > PIQS FOR MEN </Title>

            <Component>
                {
                        menfashion.map((mendata) => (
                        <Mens item={mendata} />))
                }
            </Component>
        </Mensitem>
    )
}
const Mensitem = styled.div`

 `;
 
const Component = styled.div`
display:flex;
margin-top:0px;
${Mobile({flexDirection:"row",flexWrap:"wrap"})};
  `;

const Title = styled.h1`
 margin: 100px;
 margin-bottom:40px;
 color:#f5bf03;
 text-align:center;
 ${Mobile({margin:"30px 80px"})};
 `;


export default MenCollection;