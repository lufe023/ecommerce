import React from 'react'
import Slider from 'infinite-react-carousel'
import './Carousel.css'
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
                        <div className='slide__detail_text'>
                            {
                                product.description
                            }
                        </div>
                    </div>
                    </div>
                    
                </article>)
            }
        </Slider>
    </section>
  )
}

export default Carousel