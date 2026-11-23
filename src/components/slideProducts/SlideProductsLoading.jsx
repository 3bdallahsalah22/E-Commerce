import React from 'react'

function SlideProductsLoading() {
  return (
    <div className='loading_SlideProduct'>
      <div className="slide_products slide">
      <div className="container">

        <div className="top_slide">
          <h2 className='skeliton'></h2>
          <p className='skeliton'></p>
        </div>
          <div className="products_loading">

            <div className="product">     
          <div className="img_product skeliton"></div>
          <div className="content skeliton "></div>
          <div className="content skeliton "></div>

            </div>

              <div className="product">     
          <div className="img_product skeliton"></div>
           <div className="content skeliton "></div>
          <div className="content skeliton "></div>

            </div>

              <div className="product">     
          <div className="img_product skeliton"></div>
          <div className="content skeliton "></div>
          <div className="content skeliton "></div>

            </div>

          </div>

      </div>
    </div>
    </div>
  )
}

export default SlideProductsLoading
