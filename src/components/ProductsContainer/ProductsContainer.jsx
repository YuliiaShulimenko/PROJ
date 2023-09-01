// import React, { useEffect } from 'react'


// import s from "./ProductsContainer.module.css"
// import { useDispatch, useSelector } from 'react-redux'
// import { getAllProducts } from '../../requests/products_request'
// import ProductItem from '../ProductItem/ProductItem'

// function ProductsContainer() {
//   const productsList = useSelector(state => state.allProducts)

//   const dispatch = useDispatch();

//   useEffect(() => dispatch(getAllProducts),[]);
//   return (

//     <div className={s.container}>
//       {
//          productsList.map(el => <ProductItem key={el.id}{...el}  />)}  
      
//   </div>
//   )
// }

// export default ProductsContainer

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import ProductItem from '../ProductItem/ProductItem';
// import { getAllProducts } from '../../requests/products_request';

// function ProductsContainer() {
//   const productsList = useSelector((state) => state.allProducts);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   // Render your products here
//   return (
//     <div>
//       {productsList.map((el) => (
//         <ProductItem key={el.id} {...el} />
//       ))}
//     </div>
//   );
// }


// export default ProductsContainer;



import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem/ProductItem';
import { getAllProducts } from '../../requests/products_request';

function ProductsContainer() {
  const productsList = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
console.log(productsList);
  return (
    <div>
      {productsList.map((el) => (

        <ProductItem key={el.id} product={el} />
      ))}
    </div>
  );
}

export default ProductsContainer;