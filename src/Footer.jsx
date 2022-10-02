import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
      <hr className='footerDiv'/>
    <div className='footerContainer'>
        <div className='footerA'>
        <ul className='footerList'>
            <h3>Credit to</h3>
            <li>
                <a target="blank" href='https://www.academlo.com/' alt='provide de Api account'>Academlo</a>
            </li>

            <li>
                <a target="blank" href='https://git-scm.com/'>Git</a>
            </li>

            <li>
                <a target="blank" href='https://github.com/'>Github</a>
            </li>

            <li>
                <a target="blank" href='https://www.netlify.com/'>netlify</a>
            </li>

            <li>
                <a target="blank" href='https://fontawesome.com/icons'>Font Awesome</a>
            </li>

            <li>
                <a target="blank" href='https://fonts.google.com/'>Google Fonts</a>
            </li>

        </ul>
        <ul className='footerList'>
            <h3>Used Technologies</h3>
            <li>
                <a href='#'>HTML</a>
            </li>

            <li>
                <a href='#'>JSX</a>
            </li>

            <li>
                <a href='#'>JavaScript</a>
            </li>

            <li>
                <a href='#'>CSS</a>
            </li>
        
            <h3>Author</h3>
            <li>
                <a href='https://github.com/lufe023'>Portafolio GitHub</a>
            </li>
            <li>
                <a href='mailto:lufe023@gmail.com'>lufe023@gmail.com</a>
            </li>
        </ul>
    <div className='footer-Details'>
    <h3>Project Datails</h3>   
    <p>
    This app based in React JS was done by <a target="blank" href='https://www.linkedin.com/in/luis-fernando-g%C3%B3mez-mateo-156443209/'>Luis Gómez</a> as a task for the Teacher <a target="blank" href='https://www.linkedin.com/in/benjamin-flores-48541182/'>Benjamin Flores</a>. it was an important requirement for <a target="blank" href='https://www.academlo.com/'>Academlo.</a>
    </p> 
    
        <h4>Features</h4>
        
        <ul>
        <li>Slider on the main page with the categories</li>
        <li>Products List</li>
        <li>Different types of filters to search for products, you can search by Name, Price and category</li>
        <li>It shows similar Products on product page</li>
        <li>User control by token</li>
        <li>Purchase history by users</li>
        <li>Favorite products</li>
        <li>API Consumption</li>
        <li>Responsive</li>
        </ul> 
        </div>
        </div>    
    </div>
    </div>


)
}

export default Footer