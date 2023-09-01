import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import { getProductsByCategory } from '../../requests/products_request';

function ProductsFromCategoryPage() {

  const { category_id } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProductsByCategory(category_id));
  }, []);

  const productsByCategory = useSelector((state) => state.productFromCategory);
console.log(productsByCategory,category_id);
  return (
    <div>
      <ProductsContainer products={productsByCategory} />
    </div>
  );
}

export default ProductsFromCategoryPage;
