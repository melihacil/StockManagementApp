import React from 'react'
import { useDispatch, useSelector } from "react-redux";

function Basket() {
    const basketItems = useSelector((state) => state.basket);
  return (
    <div>
        <h1>Basket</h1>
        {console.log(basketItems)}
    </div>
  )
}

export default Basket