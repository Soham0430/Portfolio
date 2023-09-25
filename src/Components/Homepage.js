import React from 'react'
import "./Homepage.css";
import homeimg from "./home-img.jpg"
const Homepage = () => {
  return (

    <>
    
       <div className="home-img"><img src={homeimg} alt="" /></div> 
       <div className="home-info">
       <div class="Hello">Hi i am </div>
                <div class="name">Soham Gujar</div>
                <div class="about">Front End Web Devloper, Student</div>
                <div class="buttons">
                     <a href="CV.html " class="button-a">CV</a>
                    <a href="contact.html" class="button-a">Contact Me</a>
                 </div>

       </div>
   </>
   
  )
}

export default Homepage

