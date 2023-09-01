import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem({category_id,title,image}) {
    console.log(category_id);
  return (
    <Link to ={`/categories/${category_id}`}>
    <div>
        <p> {title}</p>
        <img src={`http://localhost:3333${image}`} alt={title} />
    </div>
    </Link>
  )
}

export default CategoryItem