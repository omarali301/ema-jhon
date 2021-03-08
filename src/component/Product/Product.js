import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
   
    const { img, name, seller, price, key} = props.product;
    // console.log(props.product)

    return (
        <div className="product">

            <div>
                <img src={img} alt=""/>            
            </div>
          <div>
          <h4>product name :<Link to={'/product/'+key}>{name}</Link> </h4>
          <p><small>By  : {seller}</small></p>
          <p><small>Price : {price}</small></p>
          {/* <p><small>only available  : {stock}</small></p> */}
         { props.showAddBtn == true && <button onClick={() =>props.handlerAddProduct(props.product)}>add product</button>}
          
          </div>
           
           
           
        </div>
    );
};

export default Product;