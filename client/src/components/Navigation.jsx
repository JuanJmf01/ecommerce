import React, { useState, useEffect } from 'react';
import Menu from "./Menu";
import SecondaryMenu from "./SecondaryMenu";
import LateralMenu from "./LateralMenu";
import styled from 'styled-components';


import { getAllCategories } from '../data/services/api/categories.api'

import './css/lateralMenu.scss';
import { getAllEcologicalCategories } from "../data/services/api/ecologicalCategories.api";

import { getAllGenderCategories } from '../data/services/api/genderCategories.api'




const MenuItem = styled.div`
  display: flex;
  padding: 5px;
  padding-left: 10%;

  &:hover {
    background-color: #dddddd; 
  }
`;


function Navigation() {
  const [isLateralMenuOpen, setIsLateralMenuOpen] = useState(false);
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
      setEcologicalCategories(res.data);
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

  const toggleLateralMenu = () => {
    setIsLateralMenuOpen(!isLateralMenuOpen);
  };

  return (
    <div>
      <Menu />
      <SecondaryMenu toggleLateralMenu={toggleLateralMenu} />
      {isLateralMenuOpen && <LateralMenu
        toggleLateralMenu={toggleLateralMenu}
        categories={categories && categories.map((category) => (
          <MenuItem key={category.idCategory}>
            <span>{category.name}</span>
          </MenuItem>
        ))}

        ecologicalcategories={ecologicalcategories && ecologicalcategories.map((category) => (
          <MenuItem key={category.idEcologicalCategory}>
            <span>{category.name}</span>
          </MenuItem>
        ))}

        genderCategories={gendercategories && gendercategories.map((category) => (
          <MenuItem key={category.idGenderCategory} >
            <span>{category.name}</span>
          </MenuItem>
        ))}
      />}
    </div>
  );
}

export default Navigation;