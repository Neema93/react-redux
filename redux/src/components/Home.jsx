import React from "react";
function Home() {
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="text-wrapper item">
                    <img src="https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13/iphone-13-pink.jpg" />

                </div>
                <div className="text-wrapper item">
                   <span>I-Phone</span>
                   <span>Price: 1000$</span>

                </div>
                <div className="text-wrapper item">
                    <button>Add to cart</button>

                </div>

            </div>
        </div>
    )
}
export default Home;