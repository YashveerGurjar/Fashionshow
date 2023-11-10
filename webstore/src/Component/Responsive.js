// import { maxWidth } from "@mui/system";
import { css } from "styled-components";

export function Mobile (props){
    return css`
    @media screen and  (min-width: 190px)and (max-width: 800px){
        ${props}
    }
`
}
export function Pad (props){
    return css`
    @media screen and  (min-width: 90px)and (max-width: 330px){
        ${props}
    }
`
}