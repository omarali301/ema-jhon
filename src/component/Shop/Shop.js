import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
import Cart from'../cart/Cart.js';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {

    const first10 = fakeData.slice(0, 10);
 const  [product, setProduct] = useState(first10)
 const  [cart, setCart] = useState([]);

 useEffect(() =>{

   const saveCart= getDatabaseCart()
   const productKey = Object.keys(saveCart)
   const previousCart = productKey.map(existingKey =>{
    const product = fakeData.find(pd => pd.key === existingKey)
    product.quantity = saveCart[existingKey];
    return product; 
   })
   setCart(previousCart);
 },[])

 const handlerAddProduct = (product) =>{
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd=>pd.key === toBeAddedKey)
   
    let count = 1;

    let newCart;
    if(sameProduct){

      count= sameProduct.quantity + 1;
       sameProduct.quantity = count;

       const others = cart.filter(pd=>pd.key !== toBeAddedKey);

       newCart=[...others, sameProduct];

    }

    else{
        product.quantity = 1;
       newCart = [...cart, product];
     
    }
    setCart(newCart);
    console.log(cart)
 addToDatabaseCart(product.key, count);
 }
 

    return (
        <div className="product-container">
            <div className="shop-container">

               {
                   

                   product.map((product=><Product product={product} handlerAddProduct={handlerAddProduct}showAddBtn={true}></Product>))
               }
           
            </div>
            <div className="cartContainer">
            <Cart cart={cart} >
            
            <Link to='/review'><button>Review Ordered</button></Link>
            
            
            </Cart>

                
            </div>
         
        </div>
    );
};

export default Shop;