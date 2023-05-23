import React, { useState } from 'react'
import CardData from './CardData'
import "../Card/CardStyle.css";


function Card() {
    const [cartcount, setCartcount]=useState(0)
  return (<>
    <div className='buttonscls'>
    <button><h3>Cart {cartcount}</h3></button>
        </div>
    <div className='Cards'>
       {CardData.map((prod, idx)=>(
        <ProductCard
        ProductImage={prod.ProductImage}
        ProductName={prod.ProductName}
        ProductPrice={prod.ProductPrice}
        cartcount= {cartcount}
        setCartcount={setCartcount}
        />
       ))}
    </div>
    </>
  )
}
export default Card

function ProductCard({ProductImage,ProductName,ProductPrice,cartcount,setCartcount}){ 
    const[show,setShow]=useState(true)

    const handlerAddToCart=()=>{
        setShow(!show)
        setCartcount(cartcount + 1)
    }
    const handlerRemoveToCart=()=>{
        setShow(!show)
        setCartcount(cartcount - 1)
    }
    return(
        <div className='cardproduct'>
            <p>{ProductImage}</p>
            <div className='text'>
                <h3>{ProductName}</h3>
                <h4>{ProductPrice}</h4>
            </div>
            { show ? <button onClick={handlerAddToCart}>Add to Cart</button> : <button onClick={handlerRemoveToCart}>Remove from Cart</button>}
        </div>
        
    )
}

