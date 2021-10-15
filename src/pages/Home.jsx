import React from 'react';
import Categories from '../components/Categories/Categories';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Products from '../components/products/Products';
import Slider from '../components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <main>
                <section>
                    <Slider />
                </section>

                <section>
                    <Categories />
                </section>

                <section>
                    <Products />
                </section>

                <section>
                    <NewsLetter />
                </section>
            </main>
        </div>
    )
}

export default Home
