import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



  const Favorites = ({deletefromFavorite}) => {

  const favorite =useSelector(state => state.favoritesProducts)

  const products = useSelector(state => state.products)

  const navigate = useNavigate()

  function handleClick (id) {
    navigate(`/product/${id}`)
  }


  function deleteting(id) {
    let index = favorite.indexOf(id)
    deletefromFavorite(index)
  }
  

if(favorite.length==0){

  return(
    <div className='containerComponents'>
    <h3>Please add some product to your wish list  <i className="fa-solid fa-face-laugh-wink"></i></h3>
    </div>
  )
}else{
  
  return (
    <div>
    <div className='favorite__container__card'>
    <article className='card-wish'>
      <h1>Wish list</h1>
      <ul>
    {
      favorite?.map(fav=>(
        <li className='wish-list-item' key={fav-1}> {products[fav-1].title}</li>
      ))
    }
</ul>
      </article>
      {favorite?.map(fav=>(
        <article key={fav} className='card-home'>
        <header className='card-home__header'>
        <img  onClick={() => handleClick(fav)} className='card-home__img' src={products[fav-1].productImgs[0]} alt=''/>
      </header>
      <div className='car-home__body'>
        <h3 onClick={() => handleClick(fav)} id='title' className='card-home__name'>{products[fav-1].title}</h3>
        <div className='card-home__description'>
        {`${products[fav-1].description.substring(0,50)}...`}
        </div>
        <section className='card-home__price'>
          <h4 className='card-home__price-label'>Price</h4>
          <span className='card-home__price-value'>{products[fav-1].price}</span>
        </section>
        <div className='card-home__footer'>
        <i onClick={() => deleteting(fav)} className="fa-solid fa-heart-circle-minus favorite favorite-selected"></i>
        <button className='card-home__btn'><i className="fa-solid fa-cart-plus"></i></button>
      </div>
      </div>
        </article>
      
    ))}</div>
    </div>
  )
}
}

export default Favorites