import { styled } from "styled-components";
import Kids from "./Kidsitems";
import {kidsfashion} from "./data";
import { Mobile } from "./Responsive";

function KidsCollection() {
    return (
        <Kidssitem>

            <Title > KIDS CORNER</Title>

            <Component>
                {
                        kidsfashion.map((kidsdata) => (
                        <Kids item={kidsdata} />))
                }
            </Component>
        </Kidssitem>
    )
}
const Kidssitem = styled.div`
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
 
 ${Mobile({margin:"30px 90px"})};
 text-align:center;
 /* background-color:red; */
 `;


export default KidsCollection;