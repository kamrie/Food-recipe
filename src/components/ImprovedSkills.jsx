import React from 'react'

export default function ImprovedSkills() {

   const list = [
      "Acquire new cooking skills",
      "Learn new Delicacies",
      "Get ranked",
      "Get good cooking Tips",
      "Know some nutrition facts",
      "Make your own recipies"
   ]


  return (
    <div>
        <div className="section improvedSkills">
             <div className="col img"> 
                <img src="/img/gallery/pizza.jpg" alt="" />      
             </div>
                <div className="col typography">
                    <h1 className="title"> Get better with your cooking skills</h1>
                    {list.map((item, index) => (
                        <p className='skill-item' key={index}> {item} </p>
                    ))}
                    <button className="btn">SignUp now</button>
                </div>
               
        </div>
    </div>
  )
}
