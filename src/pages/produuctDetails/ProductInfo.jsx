import React, { useContext } from 'react'
import { FaStar , FaStarHalfAlt , FaRegHeart , FaShare} from "react-icons/fa"; 
import { TiShoppingCart } from 'react-icons/ti';
import { CartContext } from '../../components/context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function ProductInfo({product}) {
 
   
    const{cartItems , addToCart,addToFavourites , favourits , removeFromFavourits} = useContext(CartContext)
    const isInCart = cartItems.some(i => i.id === product.id);


    const navigate = useNavigate()
 
 const handleAddToCart = () => {
    addToCart(product)

    toast.success(
      <div className="toast-wrapper">
        <img src={product.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{product.title}</strong>
          added to cart
          <div>
            <button onClick={() => navigate('/cart')} className="btn">View cart</button>
          </div>
        </div>
      </div>
      ,{duration : 3500}
    )
  }

  // favorites

  const isInFav = favourits.some(i => i.id === product.id);

const handleAddToFav = () => {
  if(isInFav) {
 removeFromFavourits(product.id)
   toast.error(`${product.title} Removed from favorites`)

  }else{
    addToFavourites(product)
  toast.success(`${product.title} added To favorites`)
  }
}
    return (




    <div className="details_item">
                <h1 className='name'>{product.title}</h1>
                <div className='stars'>
                             <FaStar />
                             <FaStar />
                             <FaStar />
                             <FaStar />
                             <FaStarHalfAlt />
                </div>
                <p className='price'>${product.price}</p>
                <h5>Availability: <span>{product.availabilityStatus}</span></h5>
                <h5>Brand: <span>{product.brand}</span></h5>
                <p className='desc'>{product.description}</p>
                <h5><span>Hurry Up! Only {product.stock} products left in stock.</span></h5>
                <button   onClick={handleAddToCart} className={`btn  ${isInCart ? 'in-cart' : ''}`}>
                  {isInCart ? "item in cart" : "Add to cart"} <TiShoppingCart />
                </button>
                 <div className='icons'>
                 <span className={`${isInFav ? "in-fav" :""}`} onClick={handleAddToFav}><FaRegHeart /></span>
                <span> <FaShare /></span>

      </div>
            </div>
  )
}
