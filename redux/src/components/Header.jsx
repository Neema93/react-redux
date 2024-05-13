import React from 'react'
function Header(props){
    console.warn("Header",props.data)
    return(
        <div>
             <div className="add-to-cart">
                <span>{props.data.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"/>
            </div>
            <h1>Home Component</h1>
        </div>
    )
}
export default Header;