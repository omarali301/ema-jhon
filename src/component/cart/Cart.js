import React from 'react';


const Cart = (props) => {
    const cart = props.cart
    // console.log(props)

    // let total = 0;

    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total= total + product.price;
    // }
    const total = cart.reduce((total, product) => total + product.price*product.quantity, 0);
   

    let shipping = 0;

    if (total > 35){

        shipping = 0;
    }


    else if (total > 15){
        shipping = 4.99
    }

    else if(total > 0){

        shipping = 12.99;
    }

 

    const tax = total * 0.10

    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <h5>Ordered summary : {props.cart.length}</h5>
            
            <h5>Total price : {formatNumber(total)}</h5>
            <p>shipping price : {(shipping)}</p>
            <p><small>Tax + vat : {formatNumber(tax)}</small></p>
            <p>total price : {grandTotal}</p>
          
            <ul>{
                
                    cart.map(product =>

                        <img style={{height : "50px", padding : "2px", border : "1px solid gray"}} src={product.img} alt=""/>

              )
                
                }</ul>

                {
                    props.children
                }
                  
        </div>
    );
};

export default Cart;