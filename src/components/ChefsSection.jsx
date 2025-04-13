import React from 'react'
import ChefCard from './ChefCard'

export default function Chefsection() {

  const chefs = [
    {
      name: "Juan Carlos" ,
      img: "/img/top-chefs/3 lady.jpg" ,
      recipesCount: "10" ,
      cuisine: "Mexican" ,
    },
    {
      name: "Jon Doe",
      img: "/img/top-chefs/1 lady.jpg", 
      recipesCount: "06",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria" ,
      img: "/img/top-chefs/2 lady.jpg" ,
      recipesCount: "13" ,
      cuisine: "Italian" ,
    },
    {
      name: "Chris Brown",
      img: "/img/top-chefs/2 male.jpg",
      recipesCount: "09",
      cuisine: "Mexican",
    },
    {
      name: "Ben 10",
      img: "/img/top-chefs/3 male.jpg",
      recipesCount: "12",
      cuisine: "Indian",
    },
  ]
  return (
    <div className='section chefs'>
      <h1 className='title'>Our Top Chiefs</h1>
      <div className='top-chefs-container'>
        { chefs.map((chef) => (
             <ChefCard key={chef.name} chef={chef}/> 
          ))}
         
      </div>
      
    </div>
    
  )
}
