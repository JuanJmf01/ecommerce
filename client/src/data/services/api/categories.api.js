import axios from 'axios'

import config from './config/config';


const productsApiCategories = axios.create({
    baseURL: `${config.url}/${config.products}/categories/`
})


export const getAllCategories = () => {
    const res = productsApiCategories.get("/")
    return res;
}
