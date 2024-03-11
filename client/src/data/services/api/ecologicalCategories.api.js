import axios from 'axios'

import config from './config/config';

const productsApiEcologicalCategories = axios.create({
    baseURL: `${config.url}/${config.products}/ecologicalCategories/`
})


export const getAllEcologicalCategories = () => {
    const res = productsApiEcologicalCategories.get('/')
    return res;
}