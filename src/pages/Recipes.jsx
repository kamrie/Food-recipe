import React from 'react'

import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'


export default function Recipes() {

  // const chefs = [
  //   {
  //     title: "Juan Carlos" ,
  //     img: "/img/top-chefs/3 lady.jpg" ,
  //     recipesCount: "10" ,
    
  //   },
  //   {
  //     title: "Jon Doe",
  //     img: "/img/top-chefs/1 lady.jpg", 
  //     recipesCount: "06",
    
  //   },
  //   {
  //     title: "Erich Maria" ,
  //     img: "/img/top-chefs/2 lady.jpg" ,
  //     recipesCount: "13" ,
    
  //   },
  //   {
  //     title: "Chris Brown",
  //     img: "/img/top-chefs/2 male.jpg",
  //     recipesCount: "09",
  //       },
  //   {
  //     title: "Ben 10",
  //     img: "/img/top-chefs/3 male.jpg",
  //     recipesCount: "12",
  //      },
  // ]

  
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
