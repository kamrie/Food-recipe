import { useState, useEffect } from "react"
import {Link, useLocation} from "react-router-dom";
import Sidebar from "./Sidebar.jsx"; 

import {faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons"
//next is 12

export default function Navbar(){

    const location = useLocation( )
  
   const [showSidebar, setShowSidebar] = useState(false);

  
  //  useEffect(() => {

  //  })
   
   const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList

    },
    {
      name: "Settings",
      path: "/settings",
      icon: faCog

    }
   ] 

   function closeSidebar(){
      setShowSidebar(false)
   }
    return(
      <> 
         <div className="navbar container">
            <Link to={"/"} className="logo">  K<span>am</span>dra foods</Link>
            <div className="nav-links">
              {links.map(link => (
                 <Link to={link.path} className={location.pathname === link.path ? "nav-links active" : "sidebar-link"}  key={link.name}>{link.name}</Link> 
              ))}
                  {/* <a href="#" >Home</a>
                    <a href="#">Recipes</a>
                    <a href="#">Settings</a>
                  */}
            </div>
                        {/* sets showSidebar to opposite of what it was previously  */}
            <div onClick={() => setShowSidebar(!showSidebar)}  className={ showSidebar ? "sidebar-btn active" : "sidebar-btn "}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    {/* {showSidebar ? "sidebar-btn active" :  "sidebar-btn"}   */}
            </div>
        </div>
           
           {/* if showSidebar is true, show the sidebar */}
         {showSidebar &&  <Sidebar close={closeSidebar} links= {links}/> }
      </>
     
    ) 
 }





//  <nav>
//  <h5> Hello there!</h5>
//  <div className="bar"></div>
//  <div className="bar"></div>
//  <div className="bar"></div>
// </nav>



// <div class="d-flex bg-dan">
// <div class="bg-dark text-white vh-100 p-3 " style="width: 250px; background-color: red;">
// <div class="d-flex justify-content-center align-items-center g-1">
//     <img src="" alt="profile pic">
//     <div class="opacity-50">
//        <h5  >Kammrie</h4>
//        <p>balance: #500</p>
//     </div>
// </div>
// <ul class="nav flex-column opacity-50">
//    <!-- Regular Links -->
//    <li class="nav-item">
//        <a href="transactions.html" class="nav-link text-white">Dashboard</a>
//    </li>
//    <li class="nav-item">
//        <a href="transactions.html" class="nav-link text-white">Buy Data</a>
//    </li>
//    <li class="nav-item">
//        <a href="transactions.html" class="nav-link text-white">Buy Airtime</a>
//    </li>
//    <!-- <li class="nav-item">
//        <a href="transactions.html" class="nav-link text-white">Transactions</a>
//    </li>
//    <li class="nav-item">
//        <a href="wallet-summary.html" class="nav-link text-white">Wallet Summary</a>
//    </li> -->

//  <!-- Dropdown Menu -->
//  <div class="accordion" style=" border: 0px solid red; background-color: red;" id="accordionPanelsStayOpenExample">
//      <div class="accordion-item">
//        <h2 class="accordion-header">
//          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//            Accordion Item #1
//          </button>
//        </h2>
//        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
//          <div class="accordion-body">
//            <strong>This is the first item's accordion body.</strong> 
//          </div>
//        </div>

//        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
//          <div class="accordion-body">
//            <strong>This is the first item's accordion body.</strong> 
//          </div>
//        </div>
//      </div>

//      <div class="accordion-item">
//        <h2 class="accordion-header">
//          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
//            Accordion Item #3
//          </button>
//        </h2>
//        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
//          <div class="accordion-body">
//            <strong>This is the third item's accordion body.</strong> It is hidden by 
//          </div>
//        </div>
//        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
//          <div class="accordion-body">
//            <strong>This is the first item's accordion body.</strong> 
//          </div>
//        </div>
//      </div>
//    </div>

//    <!-- Another Link -->
//    <li class="nav-item position-static">
//        <a href="upgrade.html" class="nav-link text-white">Upgrade</a>
//    </li>
// </ul>
// </div>
// </div>




