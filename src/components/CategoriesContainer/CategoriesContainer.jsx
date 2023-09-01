import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../requests/categories_request';
import CategoryItem from '../CategoryItem/CategoryItem';

function CategoriesContainer(){

    const categoriesList = useSelector(state => state.allCategories)
  
    const dispatch = useDispatch();
  
    useEffect(() => dispatch(getAllCategories),[]);
    return (
  
      <div >
        {
           categoriesList.map(el => <CategoryItem key={el.id} category_id={el.id} {...el} />)}  
        
    </div>
    )
  }

export default CategoriesContainer