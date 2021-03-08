import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
 
    return (
        <div>
        
         <img style= {{height:'80px', textAlign:'center'}}src={logo} alt=""/>

         <nav className="navStyle">
             <a href="/shop">Shop</a>
             <a href="/review">Review</a>
             <a href="/manage">Manage inventory</a>
         </nav>
             </div>
    );
};

export default Header;