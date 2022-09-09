import { useNavigate } from 'react-router-dom'
//import { setFavoritesProducts } from '../../store/slices/favoritesProducts.slice'
import { useDispatch, useSelector} from 'react-redux'
import { setFavoritesProducts} from '../../store/slices/favoritesProducts.slice.js'
import axios from 'axios'
import getConfig from '../../utils/getConfig.js'



const CardHome = ({product, deletefromFavorite}) => {
  const dispatch = useDispatch()


  const navigate = useNavigate()

  const favorites =useSelector(state => state.favoritesProducts)


  const handleClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleAddCart = () =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
    const obj = {
      "id": product.id,
      "quantity": 1
  }
    axios.post(URL, obj, getConfig())
    .then(res =>console.log(res.data))
    .catch(err =>console.log(err))
  }

    const addToFavorite =() =>{
  dispatch(setFavoritesProducts(product.id))
    }
let index = favorites.indexOf(product.id)
const handleDelete = () => {
  deletefromFavorite(index)
}

  return (
    <article className='card-home'>
      <header className='card-home__header'>
        <img  onClick={handleClick} className='card-home__img' src={product.productImgs[0]} alt=''/>
      </header>
      <div className='car-home__body'>
        <h3  onClick={handleClick} className='card-home__name'>{product.title}</h3>
        <div className='card-home__description'>
        {`${product.description.substring(0,50)}...`}
        </div>
        <section className='card-home__price'>
          <h4 className='card-home__price-label'>Price</h4>
          <span className='card-home__price-value'>{product.price}</span>
        </section>
        <button onClick={handleAddCart} className='card-home__btn'><i className="fa-solid fa-cart-plus"></i></button>
      </div>
        <div className='card-home__footer'>
        {
        favorites.includes(product.id)
        ?<i onClick={handleDelete} className="fa-solid fa-heart-circle-minus favorite favorite-selected"></i>
        : <i onClick={addToFavorite} className="fa-solid fa-heart-circle-plus favorite"></i>
        }
        </div>
    </article>
  )
}

export default CardHome