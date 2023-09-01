import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';
import { getAllProducts } from '../../requests/products_request';

function AllProductsPage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts)}, []);

  return (
    <div >
      <ProductsContainer products={allProducts} />
    </div>
  );
}

export default AllProductsPage;