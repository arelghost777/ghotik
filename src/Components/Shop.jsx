import React, { useState, useEffect, useContext } from 'react';
import {CartContext} from '../CartContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Allproducts from './Allproducts';
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import Men from './Men';
import Women from './Women';

function Shop() {
  const {addToCart, products, error, loading} = useContext(CartContext);
  
  const { name } = useParams();

  return (
    <>
      {name ==='electronics' ? (
        <Electronics />
        ): name ==='men' ?(
        <Men />
        ): name ==='women' ?(
        <Women />
        ): name ==='jewelery' ?(
        <Jewelery />
        ): (<Allproducts />)
      }
    </>
  );
}

export default Shop;