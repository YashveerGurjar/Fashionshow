// import { mixProductList } from "./MixProductdata";
import React, { useEffect, useState } from "react";
import '../App.css';
import { styled } from "styled-components";
import MixProduct from "./MixProduct";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Start, Success, Fail } from '../Redux/allproductreducer';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function AllProduct({ cat, filterdata }) {
    let Seller = localStorage.getItem('Seller');

    const { isFetching } = useSelector((state) => state.product);
    const sellerProduct = useSelector((state) => state.sellerProduct.Sellerproduct)
    console.log("🚀 ~ file: AllProduct.jsx:17 ~ AllProduct ~ sellerProduct:", sellerProduct)
    // console.log("data in fillllllllll",filterdata);
    // const allProData=useSelector((state)=>state.product);
    if (cat) {
        var catdata = cat.toLowerCase();
    }
    const dataCategory = useSelector((state) => state.product)
    // console.log("data in redux all data=====>",dataCategory);
    const dispatch = useDispatch()
    // const [product,setProduct]=useState([]);
    const [filterproduct, setFilterProduct] = useState([]);

    const getProduct = async () => {


        dispatch(Start())
        try {

            const res = await axios.get(catdata ? `http://localhost:5000/api/product/Find?category=${catdata}`
                : "http://localhost:5000/api/product/Find");

            console.log("data from backend", res.data);
            if (res.data.length > 0)
                dispatch(Success(res.data));

        } catch (err) {
            dispatch(Fail(err));
        }
    }
    useEffect(() => {
        dispatch(Success([]));
        if (Seller === "false") {
            getProduct();
        }

    }, [cat])

    useEffect(() => {
        filterdata && setFilterProduct(
            dataCategory.allData.filter((item) =>
                Object.entries(filterdata).every(([key, val]) =>
                    item[key].includes(val))
            )
        )
    }, [cat, filterdata, dataCategory])

    console.log("data after gettting ====>", filterproduct);
    return (
        <Container>
            {Seller === "false" ?
                <Component>
                    {
                        isFetching ?
                            <Box sx={{
                                display: 'flex', marginLeft: "42%"
                            }}>
                                <CircularProgress style={{ height: "200px", width: "200px", color: "blue" }} />
                            </Box>
                            :
                            filterproduct.map((product) => (
                                <MixProduct item={product} />))
                    }
                </Component>
                :
                <Component>
                    {
                        sellerProduct.map((product) => (
                            <MixProduct item={product} />))
                    }
                </Component>

            }
        </Container>
    )
}
const Container = styled.div`

 `;
const Component = styled.div`
display:flex;
 margin-top:20px;
 flex-wrap:wrap;

  `;
export default AllProduct;





