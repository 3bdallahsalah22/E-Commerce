import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import PageTransition from "../../components/PageTransition";
import { p } from 'framer-motion/client';
import Products from '../../components/slideProducts/Products';
import { keyframes } from 'framer-motion';




function Favorits() {
    const { favourits } = useContext(CartContext)

    return (
        <PageTransition >
            <div className="category_products FavoritesPage">
                <div className="container">
                    <div className="top_slide">
                        <h2>Your Favorites</h2>
                    </div>
                    {favourits.length === 0 ? (
                        <p>No Favorites Products yet.</p>
                    ) : (
                        <div className="products">
                            {favourits.map(item => (
                                <Products item={item} key={item.id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </PageTransition>
    )
}

export default Favorits
