import React,{useEffect} from 'react';
import GoSocial from './Projects/GoSocial';


 function Project(){
    function openNav() {
        console.log('openNav function called from index');
        document.getElementById("mySidebar").style.width = "40%";
        // document.getElementById("main").style.marginRight = "250px";
    }
    
     function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    return(<div className="project" id="project">
    <h1>Projects.</h1>
    <div id="mySidebar" className="sidebar">
    <div className='pos_relative'>
    <div class="sidebarheader">
    <img src="images/sidebararrow.svg"></img>
    <a href="#" >Back To Projects.</a>
    </div>
    <div className='sidebarhero'>
    <h1>GoSocial</h1>
    
    <img src="images/goSocial.png"></img>
     </div>
     <div>About</div>
     <div>Technology</div>
     <div>Website</div>
     <div>Github</div>
     </div>
     </div>
    <div className="row">
        <div className="column">
           <div className="container">
           <button class="openbtn" onClick={openNav}><img src="images/goSocial.png"></img>
            <div className="overlay">GoSocial</div>
            </button>
            </div>    
        </div>
        <div className="column">
        <div className="container">
            <img src="images/supplychainpro.png"></img>
            <div className="overlay">SupplyChainPro</div> 
            </div>   
        </div>
        
    </div>
    <a href="">Lets go to my resume
    <img src="images/arrow.svg"></img>
    </a>
    </div>);
}
export default Project;