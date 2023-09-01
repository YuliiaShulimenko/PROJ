import { loadCategoriesAction } from "../store/reducers/categories_reducer"


export const getAllCategories = (callback) => {
    fetch('http://localhost:3333/categories/all')
      .then(res => res.json())
      .then(json => callback(loadCategoriesAction(json)))
  }


  