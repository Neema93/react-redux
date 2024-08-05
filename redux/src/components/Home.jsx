import React from "react";
import './HomeEdit.css';

function Home(props) {
    console.warn("props",props)
    return(
        <div>
         
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13/iphone-13-pink.jpg" />

                </div>
                <div className="text-wrapper item">
                   <span>I-Phone</span><br/>
                   <span>Price: 1000$</span>

                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>{props.addToCartHandler({price:'1000$',name:'I-phone'})}}>Add to cart</button>

                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>{props.removeToCartHandler()}}>Remove to cart</button>

                </div>
            </div>
        </div>
    )
}
export default Home;