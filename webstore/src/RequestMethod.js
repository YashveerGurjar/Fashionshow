import axios from "axios";

const base_Url="http://localhost/5000/api";

export const publicRequest= axios.create({
    baseURL:base_Url
});



