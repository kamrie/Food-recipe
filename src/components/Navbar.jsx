import { useState, useEffect } from "react"

//next is 04

export default function Navbar(){
   const [showSidebar, setShowSidebar] = useState(false);
   
   useEffect(() => {

   })
    return(
        <div className="navbar container">
            <a href="#" className="logo">  K<span>am</span>dra foods</a>
            <div className="nav-links">
                <a href="#" >Home</a>
                <a href="#">Recipes</a>
                <a href="#">Settings</a>
                
            </div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={ showSidebar ? "sidebar-btn active" : "sidebar-btn "}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    {/* {showSidebar ? "sidebar-btn acive" :  "sidebar-btn"}   */}
            </div>
        </div>
    ) 
 }