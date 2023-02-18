import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"

export const listProducts = ()=> async(dipatch)=>{
    dipatch({type: PRODUCT_LIST_REQUEST});
    try {
        const { data } = await axios.get("/api/products");
        dipatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch(error){
        dipatch({type: PRODUCT_LIST_FAIL, payload: error.message})

    }
}
export const detailsProduct = (productId)=> async(dipatch)=>{
    dipatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
    try {
        const { data } = await axios.get(`/api/products/${productId}`);
        dipatch({type: PRODUCT_DETAILS_SUCCESS, payload: data})
    } catch(error){
        dipatch({type: PRODUCT_DETAILS_FAIL,
             payload: error.message && error.response.data.message
             ?error.response.data.message: error.message,
            });
    }
}