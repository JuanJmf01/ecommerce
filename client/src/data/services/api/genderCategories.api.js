import axios from 'axios'

import config from './config/config';


const productsApiGenderCategories = axios.create({
    baseURL: `${config.url}/${config.products}/genderCategories/`
})


export const getAllGenderCategories = () => {
    const res = productsApiGenderCategories.get('/')
    return res;
}