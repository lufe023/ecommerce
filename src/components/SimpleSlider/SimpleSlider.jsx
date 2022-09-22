import React from 'react'
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './SimpleSlider.css'



const SimpleSlider = ({categories}) => {


    const plusHandleClick = () => {
        let actual = document.getElementById('S-Container').scrollLeft
        let width = document.getElementById('S-Container').clientWidth
        let multiplo = categories.length-1

        if(actual>=width* multiplo)
        {
            document.getElementById('S-Container').scrollLeft += -width*multiplo
        }
        else{
        document.getElementById('S-Container').scrollLeft += width
        }

    }

    const minusHandleClick = () => {
        let width = document.getElementById('S-Container').clientWidth
        let actual = document.getElementById('S-Container').scrollLeft
        let multiplo = categories.length-1

        if(actual<=0)
        {
            document.getElementById('S-Container').scrollLeft += width*multiplo;
        }else{
            document.getElementById('S-Container').scrollLeft += -width
    }
    }

 

    

  return (
    <div className='Simple-Slider'>
        <button onClick={minusHandleClick} className='S-boton S-botonA' id='boton'><i className="fa-solid fa-arrow-left"></i></button>
            <div className='S-Container ' id='S-Container'>
            {categories?.map(category =>
                <article key={category.id} className='S-Card' id="page-1">
                    <div className='S-wrap'>
                    <HashLink smooth to={'/#category'}>
                        <h2 className='S-card-title'>{category.name}</h2>
                    </HashLink>
                <p>Get All {category.name}'s rightnow</p>
                </div>
                </article>
                )}
        </div>
        <button onClick={plusHandleClick} className='S-boton S-botonB' id='boton'><i className="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default SimpleSlider