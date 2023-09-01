import { combineReducers, createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import { CategoriesReduser } from './reducers/categories_reducer';
import { allProductsReduser } from './reducers/allProducts_reducer';
import { productsByCategoryReducer } from './reducers/productByCategory_reducer';


const rootReducer = combineReducers({

allCategories : CategoriesReduser,
allProducts : allProductsReduser,
productFromCategory: productsByCategoryReducer


});

export const store = createStore(rootReducer,applyMiddleware(thunk));