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



    useEffect(() => {
        async function fetchData() {
            try {
                const generalRes = await getAllCategories();
                const ecologicalRes = await getAllEcologicalCategories();
                const genderRes = await getAllGenderCategories();

                setCategories(generalRes.data);
                setEcologicalCategories(ecologicalRes);
                setGenderCategories(genderRes.data);
            } catch (error) {
                console.error("Error al cargar categorías:", error);
            }
        }

        fetchData();
    }, []);




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
                {/* Categories list que se estan mostrando */}
                {allGeneralCategories && allGeneralCategories.map((category) => (
                    <MenuItem key={category.idCategory}>
                        <Link to={`/products/category/${category.idCategory}/${category.name}`} onClick={toggleLateralMenu}>
                            <span >{category.name}</span>
                        </Link>
                    </MenuItem>
                ))}
                <h3 className="menu-subTitle">Seleccion sostenible</h3>
                {/* List of sustainable categories que se estan mostrando */}
                {allEcologicalcategories && allEcologicalcategories.map((category) => (
                    <MenuItem key={category.idEcologicalCategory}>
                        <Link to={`/products/ecological/${category.idEcologicalCategory}/${category.name}`} onClick={toggleLateralMenu}>
                            <span >{category.name}</span>
                        </Link>
                    </MenuItem>
                ))}

                <h3 className="menu-subTitle">Seleccion por segmento</h3>
                {/* List of categories by gender que se estan mostrando*/}
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