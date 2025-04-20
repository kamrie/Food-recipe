import React from 'react'

import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'


export default function Recipes() {


  
  const recipes = [
    {
      title: "Macncheese and Meatballs" ,
    image: "/img/gallery/macncheese.jpg" ,
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
      title: "Tomato salad",
          image: "/img/gallery/tomato-salad.jpg" ,
      authorImg: "/img/top-chefs/3 male.jpg",
     },
    {
      title: "Japanese schnitzel",
          image: "/img/gallery/schnitzel.jpg" ,
      authorImg: "/img/top-chefs/4 male.jpg",
     },
    {
      title: "Dumplings",
          image: "/img/gallery/dumplings.jpg" ,
      authorImg: "/img/top-chefs/5 male.jpg",
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
