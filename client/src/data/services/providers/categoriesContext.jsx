import React, { useState, useEffect, createContext, useContext } from 'react';

// Creamos un contexto para las categorías
const CategoriesContext = createContext();

// Creamos un componente Provider para manejar las categorías
export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [ecologicalCategories, setEcologicalCategories] = useState([]);
    const [genderCategories, setGenderCategories] = useState([]);

    const addCategory = (type, category) => {
        switch (type) {
            case 'category':
                setCategories(prevCategories => [...prevCategories, category]);
                break;
            case 'ecological':
                setEcologicalCategories(prevCategories => [...prevCategories, category]);
                break;
            case 'gender':
                setGenderCategories(prevCategories => [...prevCategories, category]);
                break;
            default:
                break;
        }
    };

    const deleteCategory = (type, id) => {
        switch (type) {
            case 'category':
                setCategories(prevCategories => prevCategories.filter(category => category.id !== id));
                break;
            case 'ecological':
                setEcologicalCategories(prevCategories => prevCategories.filter(category => category.id !== id));
                break;
            case 'gender':
                setGenderCategories(prevCategories => prevCategories.filter(category => category.id !== id));
                break;
            default:
                break;
        }
    };

    return (
        <CategoriesContext.Provider value={{ categories, ecologicalCategories, genderCategories, addCategory, deleteCategory }}>
            {children}
        </CategoriesContext.Provider>
    );
};

// Hook personalizado para consumir el contexto de categorías
export const useCategories = () => useContext(CategoriesContext);
