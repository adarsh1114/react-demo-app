import React from 'react'
import { useState, useEffect } from 'react';
import './suggestionBox.css'

export default function SuggestionBox() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {
        await fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    };
    const categoryArr = products.map((product) => {
        return product.category
    });
    const categories = categoryArr.filter((item,
        index) => categoryArr.indexOf(item) === index);

    return (
        <div className='suggestionBox' style={{ cursor: "pointer" }}>
            <h4>Latest Trends</h4>
            <div className="row">
                {products.slice(0, 4).map((product) => (
                    <div key={product.id} className="col-md-3">
                        <img src={product.image} alt={product.title} className="suggest-pro-img" />
                        <p>{product.title}</p>
                    </div>
                ))}
            </div>
            <div className='row'>
                <h4>Popular suggestion</h4>
                {categories.map((category) => (
                    <p>{category}</p>
                ))}
            </div>
        </div>
    )
}
