import React from 'react';

const ReviewItem = (props) => {
    // console.log(props)
    const {name,price,quantity,key}=props.product
    return (
        <div >
            <h4>Product name :{name} </h4>
            <p>price : {price}</p>
            <p>quantity : {quantity}</p>
            <button onClick={()=>props.removeHandler(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;