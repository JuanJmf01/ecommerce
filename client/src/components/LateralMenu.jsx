import { IoClose } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getAllCategories } from '../data/services/api/categories.api'

import './css/lateralMenu.scss';
import { getAllEcologicalCategories } from "../data/services/api/ecologicalCategories.api";

import { getAllGenderCategories } from '../data/services/api/genderCategories.api'

import { useCategories } from '../data/services/providers/categoriesContext'


import { Link, useNavigate } from 'react-router-dom';

const MenuItem = styled.div`
  display: flex;
  padding: 5px;
  padding-left: 10%;

  &:hover {
    background-color: #dddddd; 
  }

  a {
    text-decoration: none;
    color: black;
  }
`;


function LateralMenu({ toggleLateralMenu, withLateralMenu, goToProductsDirectly }) {
    const [iconClicked, setIconClicked] = useState(false);
    const [allGeneralCategories, setCategories] = useState([]);
    const [allEcologicalcategories, setEcologicalCategories] = useState([]);
    const [allGendercategories, setGenderCategories] = useState([]);
    const navigate = useNavigate();

    const { categories, ecologicalCategories, genderCategories, deleteCategory } = useCategories();

    async function loadCategories() {
        try {
            const res = await getAllCategories();
            setCategories(res.data);
        } catch (error) {
            console.error("Error al cargar categorías:", error);
        }
    }

    async function loadEcologicalCategories() {
        try {
            const res = await getAllEcologicalCategories();
            setEcologicalCategories(res);
        } catch (error) {
            console.error("Error al cargar categorías ecológicas:", error);
        }
    }

    async function loadGenderCategories() {
        try {
            const res = await getAllGenderCategories();
            setGenderCategories(res.data);
        } catch (error) {
            console.error("Error al cargar las categorias por segmento:", error);
        }
    }

    const clearAllCategories = () => {
        categories.forEach(category => deleteCategory('category', category.id));
        ecologicalCategories.forEach(category => deleteCategory('ecological', category.id));
        genderCategories.forEach(category => deleteCategory('gender', category.id));
    };

    useEffect(() => {

        clearAllCategories()

        loadCategories();
        loadEcologicalCategories();
        loadGenderCategories();
    }, []);

    useEffect(() => {
        if (goToProductsDirectly) {
            if (!categories.length && !ecologicalCategories.length && !genderCategories.length) {
                navigate('/products');
            }
        }
    }, [categories, ecologicalCategories, genderCategories, navigate]);

    const handleIconClick = () => {
        setIconClicked(!iconClicked);
        toggleLateralMenu();
    };


    return (
        <div className={` ${!iconClicked && withLateralMenu ? 'overlay-active' : ''}`}>
            <div className={` ${!withLateralMenu ? 'lateral-menu' : 'hidden-side-menu'}`}>
                {withLateralMenu ? (
                    <div className="menu-header">
                        <h3 className="menu-title">Menu</h3>
                        <button onClick={handleIconClick} className="close-button"><IoClose /></button>
                    </div>
                ) : undefined}

                <h3 className='menu-subTitle'>Contenido</h3>
                {/* Categories list */}
                {allGeneralCategories && allGeneralCategories.map((category) => (
                    <MenuItem key={category.idCategory}>
                        <Link to={`/products/category/${category.idCategory}/${category.name}`} onClick={toggleLateralMenu}>
                            <span >{category.name}</span>
                        </Link>
                    </MenuItem>
                ))}
                <h3 className="menu-subTitle">Seleccion sostenible</h3>
                {/* List of sustainable categories */}
                {allEcologicalcategories && allEcologicalcategories.map((category) => (
                    <MenuItem key={category.idEcologicalCategory}>
                        <Link to={`/products/ecological/${category.idEcologicalCategory}/${category.name}`} onClick={toggleLateralMenu}>
                            <span >{category.name}</span>
                        </Link>
                    </MenuItem>
                ))}

                <h3 className="menu-subTitle">Seleccion por segmento</h3>
                {/* List of categories by gender */}
                {allGendercategories && allGendercategories.map((category) => (
                    <MenuItem key={category.idGenderCategory}>
                        <Link to={`/products/gender/${category.idGenderCategory}/${category.name}`} onClick={toggleLateralMenu}>
                            <span  >{category.name}</span>
                        </Link>
                    </MenuItem>
                ))}
            </div>
        </div>
    );
}

export default LateralMenu;