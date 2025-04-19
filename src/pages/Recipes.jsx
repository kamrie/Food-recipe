import React from 'react'

import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'


export default function Recipes() {


  
  const recipes = [
    {
      title: "Spaghetti and Meatballs" ,
    image: "/img/gallery/curry.jpg" ,
      authorImg: "/img/top-chefs/3 lady.jpg" ,
      
    
    },
    {
      title: "Mutton",
    image: "/img/gallery/curry.jpg" ,
      authorImg: "/img/top-chefs/1 lady.jpg", 
          
    },
    {
      title: "American Cheese burger" ,
    image: "/img/gallery/burger.jpg" ,
      authorImg: "/img/top-chefs/2 lady.jpg" ,
      
    
    },
    {
      title: "Chicken pan pizza",
    image: "/img/gallery/pizza.jpg" ,
      authorImg: "/img/top-chefs/2 male.jpg",
   },
    {
      title: "Japanese Sushi",
          image: "/img/gallery/tomato-salad.jpg" ,
      authorImg: "/img/top-chefs/3 male.jpg",
     },
  ].sort(() => Math.random() * 0.5) //its shuffling our array


  return (
    <div>
       <PreviousSearches />
       <div className="recipes-container">
          {recipes.map((recipe, index) => (
               < RecipeCard key={index} recipe={recipe} /> 

          )  )}
        
       </div>
    </div>
  )
}
