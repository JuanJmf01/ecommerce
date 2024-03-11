import axios from 'axios'

import config from './config/config';

import { EcologicalCategory } from '../../models/ecologicalCategory'

const productsApiEcologicalCategories = axios.create({
    baseURL: `${config.url}/${config.products}/ecologicalCategories/`
})


export const getAllEcologicalCategories = async (): Promise<EcologicalCategory[]> => {
    try {
        const res = await productsApiEcologicalCategories.get('/');
        return res.data; // No es necesario realizar un mapeo aquí
    } catch (error) {
        console.error("Error al cargar categorías ecológicas:", error);
        throw error;
    }
};

