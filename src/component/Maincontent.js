import React, { useState } from "react";
import "./Maincontent.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function Maincontent({ products }) {
  const [wishlist, setWishlist] = useState([]);

  function showButton(event) {
    const viewButton = event.currentTarget.querySelector(".viewButton");
    viewButton.classList.remove("hidden");
  }

  function hideButton(event) {
    const viewButton = event.currentTarget.querySelector(".viewButton");
    viewButton.classList.add("hidden");
  }

  function handleWishlist(id) {
    if (wishlist.includes(id)) {
     
      const updatedWishlist = wishlist.filter((itemId) => itemId !== id);
      setWishlist(updatedWishlist);
    } else {
     
      setWishlist([...wishlist, id]);
    }
    
  }

  return (
    <div>
      <div className="product-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="card"
            onMouseEnter={(e) => showButton(e)}
            onMouseLeave={(e) => hideButton(e)}
          >
            {wishlist.includes(product.id) ? (
              <AiFillHeart style={{color: "red"}} onClick={() => handleWishlist(product.id)} />
            ) : (
              <AiOutlineHeart onClick={() => handleWishlist(product.id)} />
            )}
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top photo"
            />
            <button className="viewButton hidden">View Product</button>
            <h5 className="card-title">{product.title}</h5>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Maincontent;
