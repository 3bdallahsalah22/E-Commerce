import React, { useEffect, useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";



const NavLinks=[
  {title:"home" , link: "/"},
  {title:"About" , link: "/about"},
  {title:"Accessories" , link: "/accessories"},
  {title:"Blog" , link: "/blog"},
  {title:"contact" , link: "/contact"},


]
function BottomHeader() {
  const [isCategoryOpen , setIsCategoryOpen ] = useState(false)
  const location = useLocation()
  const[categories,setCategories]=useState([]);
   
   useEffect(() => {
    setIsCategoryOpen(false)
   },[location])
  useEffect(()=>{
    fetch('https://dummyjson.com/products/categories')
    .then((res)=> res.json())
     .then((data)=>setCategories(data))
  },[])
  console.log(isCategoryOpen)
  return (
    <div className='btm_header'>
      <div className='container'>
        <nav className='nav'>
          <div className="category_nav">
            <div className="category_btn" onClick={()=> setIsCategoryOpen(!isCategoryOpen)}>
             <IoMenu />
              <p>Browse Category</p>
                <IoMdArrowDropdown />
            </div>
            <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}>
            {categories.map((category)=>(
              <Link key={category.slug} to={`category/${category.slug}`}>{category.name}</Link>
            ) )}
            </div>
          
          </div> 
            <div className="nav_links">
              {NavLinks.map((item)=>(
< li key={item.link} className={location.pathname === item.link ? "active" : ""}> <Link  to={item.link}>{item.title}</Link></li>
              )   ) }
                
            </div>
        </nav>
        <div className="sign_regs_icon">
          <Link to="/"><PiSignInBold /></Link>
           <Link to="/"><FaUserPlus /></Link>

        </div>
      </div>
    </div>
  )
}

export default BottomHeader
