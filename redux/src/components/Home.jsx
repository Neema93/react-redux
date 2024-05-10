import React from "react";
import './HomeEdit.css';
function Home(props) {
    console.warn("Home",props.data)
    return(
        <div>
            <div className="add-to-cart">
                <span>{props.data.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"/>
            </div>
            <h1>Home Component</h1>
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

            </div>
        </div>
    )
}
export default Home;