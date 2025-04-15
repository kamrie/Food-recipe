import React from 'react'
import CustomImg from './CustomImg'



export default function RecipeCard({recipe}) {
  return (
    <div className='recipe-card'>
       <CustomImg   imgSrc={recipe.image} pt="65%" />
       <div className="recipe-card-info">
          <img className='author-img' src={recipe.authorImg} alt="" />
          <p className="recipe-title"> {recipe.title}</p>
          <p className="recipe-desc"> Huge Sized Chicken </p>
          <a className="view-btn"> VIEW RECIPE </a>
       </div>
    </div>
  )
}
