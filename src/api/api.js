import axios from "axios";

export const allProduct = async ()=>{
    
    const products = await axios.get('https://fakestoreapiserver.reactbd.com/products')
    return products
}