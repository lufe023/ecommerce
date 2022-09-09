import React from 'react'
import Slider from 'infinite-react-carousel'
import './Carousel.css'
import { HashLink, NavHashLink } from 'react-router-hash-link';

const Carousel = ({products}) => {
   console.log(products)

  


  return (
    <section className='Carousel-Container'>
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
                            <li  className='imgsSlider' key={img}><img src={img} /></li>
                        ))
                        }                       
                        </ul>
                    </div>
                    
                </article>)
            }
        </Slider>
        <div></div>
    </section>
)
}

export default Carousel