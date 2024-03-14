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
        let isEmpty = false;
        switch (type) {
            case 'category':
                setCategories(prevCategories => {
                    const newCategories = prevCategories.filter(category => category.id !== id);
                    isEmpty = newCategories.length === 0 && ecologicalCategories.length === 0 && genderCategories.length === 0;
                    return newCategories;
                });
                break;
            case 'ecological':
                setEcologicalCategories(prevCategories => {
                    const newCategories = prevCategories.filter(category => category.id !== id);
                    isEmpty = categories.length === 0 && newCategories.length === 0 && genderCategories.length === 0;
                    return newCategories;
                });
                break;
            case 'gender':
                setGenderCategories(prevCategories => {
                    const newCategories = prevCategories.filter(category => category.id !== id);
                    isEmpty = categories.length === 0 && ecologicalCategories.length === 0 && newCategories.length === 0;
                    return newCategories;
                });
                break;
            default:
                break;
        }
        return isEmpty;
    };


    return (
        <CategoriesContext.Provider value={{ categories, ecologicalCategories, genderCategories, addCategory, deleteCategory }}>
            {children}
        </CategoriesContext.Provider>
    );
};

// Hook personalizado para consumir el contexto de categorías
export const useCategories = () => useContext(CategoriesContext);
