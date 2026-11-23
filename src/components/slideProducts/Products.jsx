import react, { useContext } from "react";

import { FaStar , FaStarHalfAlt , FaCartArrowDown , FaRegHeart , FaShare , FaCheck  } from "react-icons/fa"; 
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import  toast from 'react-hot-toast';

function Products({item}) {
  const navigate = useNavigate()
  const{cartItems , addToCart , addToFavourites , favourits , removeFromFavourits } = useContext(CartContext)
  console.log(cartItems)
  const isInFav = favourits.some(i => i.id === item.id);

  const handleAddToCart = () => {
    addToCart(item)

    toast.success(
      <div className="toast-wrapper">
        <img src={item.images[0]} alt="" className="toast-img" />
        <div className="toast-content">
          <strong>{item.title}</strong>
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

  const isInCart = cartItems.some(i => i.id === item.id);

const handleAddToFav = () => {
  if(isInFav) {
 removeFromFavourits(item.id)
   toast.error(`${item.title} Removed from favorites`)

  }else{
    addToFavourites(item)
  toast.success(`${item.title} added To favorites`)
  }
}
  return (
    <div className={`product ${isInCart ? 'in-cart' : ''}`}>

    <Link to={`/products/${item.id}`}>
    <span className="status_cart"><FaCheck />in cart</span>
      <div className="img_product">
        <img src={item.images[0]} alt="" />
      </div>
      <p className='product_name'>{item.title}</p>
      <div className='stars'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className='price'>$ {item.price}</p>
    </Link>
      <div className='icons'>
        <span className="btn-addtocart" onClick={handleAddToCart} ><FaCartArrowDown /></span>
        <span className={`${isInFav ? "in-fav" :""}`} onClick={handleAddToFav}><FaRegHeart /></span>
        <span> <FaShare /></span>

      </div>
    </div>
  )
}

export default Products
