import React from 'react'
import estilos from './Slider.module.css'
const Slider = ({imagenes}) => {
  return (
    <div className={estilos.slider__container}>
        <button>{'<'} </button>
        {
        imagenes.map((imagen, index)=>{
            return <img key={index} src={imagen} alt="img"/>
        })
        }
        <button>{'>'}</button>
    </div>
  )
}

export default Slider