import { container } from "./data";
import { styled } from "styled-components";
import CategorieItem from "./CategorieItem";
import { Mobile } from "./Responsive";
function Categories(){
    return(
        <Categorie>
        {
            container.map((data)=>(
           <CategorieItem value={data} />
           ))
        }
        </Categorie>
    )


}
 const Categorie=styled.div`
 display:flex;
 margin-top: 70px;
 ${Mobile({flexDirection:"row",flexWrap:"wrap",marginTop:"10px"})};
 `;

export default Categories;