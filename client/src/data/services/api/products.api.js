import axios from 'axios'

import config from './config/config';


const productsApiProducts = axios.create({
    baseURL: `${config.url}/${config.products}/products/`
})


export const getAllProducts = () => {
    const res = productsApiProducts.get("/")
    return res;
}

export const getProductsByCategory = (idCategory) => {
    const res = productsApiProducts.get(`/by_category/${idCategory}/`)
    return res;
}

export const getProductsByEcologicalCategory = (idCategory) => {
    const res = productsApiProducts.get(`/by_ecologicalCategory/${idCategory}/`)
    return res;
}

export const getProductsByGenderCategory = (idCategory) => {
    const res = productsApiProducts.get(`/by_genderCategory/${idCategory}/`)
    return res;
}


