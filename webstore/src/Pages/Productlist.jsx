import Footer from "../Component/Footer";
import AllProduct from "../Component/AllProduct";
import React from "react";
import '../App.css';
import { styled } from "styled-components";
import ReplyIcon from '@mui/icons-material/Reply';
import { Mobile } from "../Component/Responsive";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
function ProductList() {
    const [filters,setFilters]=useState({})
    const location=useLocation();
    const navigate=useNavigate();
    const cat=(location.pathname.split("/")[2]);
    function handelFilter(e){
        setFilters({
            ...filters,
            [e.target.name]:e.target.value
        })
    }
    console.log("data in filter ",filters);
    return (
        <Container>
                 <Titlecontainer>
                    <Title> ALL PRODUCT'S
                    <FilterProduct>
                        <SearchColor name="color" onChange={handelFilter}>
                            <Option disabled selected>
                                Color
                            </Option>
                            <Option >
                                black
                            </Option>
                                                
                            <Option>
                                white
                            </Option>
                        
                             <Option>
                                red 
                            </Option>
                            <Option>
                                blue
                            </Option>
                        </SearchColor>
                        <SearchColor name="size" onChange={handelFilter}>
                            <Option disabled selected>
                                size
                            </Option>
                                                
                            <Option>
                                m
                            </Option>
                            <Option>
                                l
                            </Option>
                        
                             <Option>
                                xl
                            </Option>
                            <Option>
                                xxl
                            </Option>
                            
                        </SearchColor>
                    </FilterProduct>
                    </Title>

                </Titlecontainer>
            <AllProduct cat={cat} filterdata={filters} />
            <Icon  onClick={()=>{navigate("/")}}>
                <ReplyIcon className="icon" style={{ border: "2px solid #88BDBC", padding: "5px 30px", cursor: "pointer", transition: "all 0.5s ease" }} ></ReplyIcon>
            </Icon>
            <Footer />

        </Container>
    )


}
const Container = styled.div`

${Mobile({ })};
`;
const Titlecontainer = styled.div`
width:100%;
/* background-color:blue; */
margin-top:30px;
display:flex;
align-items:center;
${Mobile({justifyContent:"space-around"})};

`;

const Title = styled.div`
  color:#f5bf03;
  font-weight:bold;
  font-size:20px;
  /* background-color:red; */
  /* width:150px; */
  display:flex;
  justify-content:center;
  align-items:center; 
  
  
`;

const Icon = styled.div`
    height:30px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;  
    ${Mobile({height:"20px",marginTop:"10px" })};
`;

const FilterProduct = styled.div``;

const SearchColor = styled.select`
margin:10px;
padding:5px;
transition: all 0.5s ease;
border-radius:15%;
cursor: pointer;
border:2px solid #88BDBC;

&:hover{
  background-color: #88BDBC; 
}
`;

const Option = styled.option`
`;

export default ProductList;