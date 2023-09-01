import { loadAllProductsAction } from "../store/reducers/allProducts_reducer"
import { loadProductsByCategoryAction } from "../store/reducers/productByCategory_reducer"



  export const getProductsByCategory = category_id => {
    return dispatch=>{
    fetch(`http://localhost:3333/products/${category_id}`)
      .then(res => res.json())
      .then(json => dispatch(loadProductsByCategoryAction(json))  )
  }}

//   export const getAllProducts = (callback) => {
//     fetch('http://localhost:3333/products/all')
//       .then(res => res.json())
//       .then(json => callback(loadAllProductsAction(json)))
//   }
//   не работает,ошибка Actions must be plain objects. Instead, the actual type was: 'undefined'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.


export const getAllProducts = () => {
    return (dispatch) => {
      fetch('http://localhost:3333/products/all')
        .then((res) => res.json())
        .then((json) => {
          dispatch(loadAllProductsAction(json));
        });
    };
  };