import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
  const [cart,setCart] = useState([])
  const [placeOrder,setPlaceOrder] = useState(false)

  const handlePlaceOrder = () =>{
      setCart([]);

      setPlaceOrder(true);
    processOrder();


  }
    useEffect(() => {
       const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        const cartProduct = productKey.map(key=>{
            const product = fakeData.find(pd =>pd.key===key);
             product.quantity = saveCart[key]
            return product;
        });
        setCart(cartProduct);

    }, [])

    const removeHandler = (productKey)=>{
        const newCart = cart.filter(pd=> pd.key !== productKey)
        setCart(newCart);
       removeFromDatabaseCart(productKey);
    }

    let thankyou;
    
if(placeOrder){
    thankyou = <img src={happyImage} alt=""/>
}
    return (
        <div className="product-container">

            <div className="shop-container">
            <h5>Product item : {cart.length}</h5>
            {
                cart.map(pd=> <ReviewItem product={pd} removeHandler={removeHandler}></ReviewItem>)
            }
            
            {
                thankyou
            }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}> <button onClick={handlePlaceOrder}>place Ordered</button> </Cart>
            </div>

        </div>
    );
};

export default Review;