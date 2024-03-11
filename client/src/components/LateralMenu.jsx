import { IoClose } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getAllCategories } from '../data/services/api/categories.api'

import './css/lateralMenu.scss';
import { getAllEcologicalCategories } from "../data/services/api/ecologicalCategories.api";

import { getAllGenderCategories } from '../data/services/api/genderCategories.api'


import { Link } from 'react-router-dom';

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


function LateralMenu({ toggleLateralMenu, withLateralMenu, onSelectCategory }) {
    const [iconClicked, setIconClicked] = useState(false);
    const [categories, setCategories] = useState(false);
    const [ecologicalcategories, setEcologicalCategories] = useState(false);
    const [gendercategories, setGenderCategories] = useState(false);

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

    useEffect(() => {
        loadCategories()
        loadEcologicalCategories()
        loadGenderCategories()
    }, [])



    const handleIconClick = () => {
        setIconClicked(!iconClicked);
        toggleLateralMenu(); // Llamar a la funcion para abrir el menu lateral
    };

    const handleCategoryClick = (category) => {
        onSelectCategory(category); // Llamar al manejador de eventos onSelectCategory
    };

    return (
        <div className={` ${!iconClicked && withLateralMenu ? 'overlay-active' : ''}`}>
            <div className={` ${!withLateralMenu ? 'lateral-menu' : 'hidden-side-menu'}`}>
                {withLateralMenu ? <div className="menu-header">
                    <h3 className="menu-title">Menu</h3>
                    <button onClick={handleIconClick} className="close-button"><IoClose /></button>
                </div> : undefined}

                <h3 className='menu-subTitle'>Contenido</h3>
                {/* Categories list */}
                {categories && categories.map((category) => (
                    <MenuItem key={category.idCategory}>
                        <Link to={`/products/category/${category.idCategory}`} onClick={toggleLateralMenu}>
                            <span onClick={() => handleCategoryClick(category)}>{category.name}</span>
                        </Link>

                    </MenuItem>
                ))}
                <h3 className="menu-subTitle">Seleccion sostenible</h3>
                {/* List of sustainable categories */}
                {ecologicalcategories && ecologicalcategories.map((category) => (
                    <MenuItem key={category.idEcologicalCategory}>
                        <Link to={`/products/ecological/${category.idEcologicalCategory}`} onClick={toggleLateralMenu}>
                            <span>{category.name}</span>
                        </Link>
                    </MenuItem>
                ))}

                <h3 className="menu-subTitle">Seleccion por segmento</h3>
                {/* List of categories by gender */}

                {gendercategories && gendercategories.map((category) => (
                    <MenuItem key={category.idGenderCategory}>
                        <Link to={`/products/gender/${category.idGenderCategory}`} onClick={toggleLateralMenu}>
                            <span>{category.name}</span>
                        </Link>
                    </MenuItem>
                ))}
            </div>
        </div>
    );
}

export default LateralMenu;
