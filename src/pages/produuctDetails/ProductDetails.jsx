import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './productDetails.css'
import SlideProducts from '../../components/slideProducts/SlideProducts';
import Products from '../../components/slideProducts/Products';
import ProductDetailsLoading from './ProductDetailsLoading';
import SlideProductsLoading from '../../components/slideProducts/SlideProductsLoading';
import ProductImages from './ProductImages';
import ProductInfo from './ProductInfo';
import PageTransition from '../../components/PageTransition';

function ProductDetails() {
  const { id } = useParams()
  console.log(id);

  const [ product, setProduct ] = useState(null)
  const [ loading, setLoading ] = useState(true)
 
  const [relatedProducts , setRelatedProducts] = useState([])
  const [losadingRelatedProducts , setLoadingRelatedPeoducts] = useState(true)


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
        setLoading(false)

      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct()
  }, [id])

useEffect(() => {
  if(!product) return 
  fetch(`https://dummyjson.com/products/category/${product.category}`)
  .then((res) =>res.json())
  .then((data)=>{
    setRelatedProducts(data.products)
  })
  .catch((error)=> console.error(error))
  .finally(()=> setLoadingRelatedPeoducts(false))
},[product?.category])
  console.log(product);
  console.log(relatedProducts)

  if (loading) return <ProductDetailsLoading/>
  if (!product) return <p>Product Not Found</p>

  return (
   
  
    <PageTransition key={id}>
       <div>
      <div className='item-details'>
        <div className='container'>
           <ProductImages product={product}/>

         <ProductInfo product={product}/>
        </div>
         
    </div>
   {losadingRelatedProducts ? (
   <SlideProductsLoading/>
   ):(
    <SlideProducts  key={product.category} data={relatedProducts} title={product.category.replace("-","")}  />
   )}
    </div>

    </PageTransition>

  )
}

export default ProductDetails