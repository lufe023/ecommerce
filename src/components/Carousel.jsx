import React, { useState } from 'react'
import Slider from 'infinite-react-carousel'
import './Carousel.css'
import { HashLink, NavHashLink } from 'react-router-hash-link';

const Carousel = ({products}) => {
   console.log(products)

  const [showImg, setShowImg] = useState([false,0])

  const handleShow = e => {
    setShowImg([true, e])
  } 

  const handleDontShow = e =>{
    e.stopPropagation()
    setShowImg([false,0])
 
}
const show = {
    backgroundColor: ''
}

const dontShow = {
    display: 'none',
    backgroundColor: ''
}
  console.log(showImg)

const blur = {
    filter: 'blur(10px)',
    transition: 'filter 100ms ease'
}

const noBlur = {
    filter: 'blur(0px)',
    transition: 'filter 100ms ease'
}
  return (
    <div>
        <div className='visor' style={showImg[0]==true? show : dontShow} onClick={handleDontShow}>
        <p onClick={handleDontShow} className='close'><i className="fa-solid fa-xmark"></i></p>
        <img className='visor__img' src={showImg[1]}/>
        </div>
    <section className='Carousel-Container' style={showImg[0]==true? blur: noBlur} >
        <Slider className='slider__content'>
            {
                products?.map(product => 
                <article key={product.id} className='Slider__Content-item'>
                    <div className='slideWraper'>
                    <div className='slider_img_container'>
                        <img className='sliderimg' src={product.productImgs[0]}/>
                    </div>

                    <div className='slide__detail'>
                        <h2 className='slide_title'>{product.title}</h2>
                        <p>
                        {
                                product.description.substring(0, 50)
                            }
                            </p>
                            <h4>
                            <HashLink smooth to={'/#category'}>
                            {product.category.name}
                            </HashLink>
                            </h4>
                    </div>
                    <ul className='slide__detail_text'>
                        
                        {
                        product.productImgs.map(img =>(
                            <li onClick={()=>handleShow(img)} className='imgsSlider' key={img}>
                            
                                
                                <img src={img} /></li>
                        ))
                        }                       
                        </ul>
                    </div>
                    
                </article>)
            }
        </Slider>
        <div></div>
    </section>
    </div>
)
}

export default Carousel