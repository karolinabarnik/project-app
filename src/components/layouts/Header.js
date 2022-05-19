import React from 'react';
import  { Routes, Route } from 'react-router-dom'
import "../styles/Header.css";

import img1 from '../images/header1.jpg'
import img2 from '../images/header2.jpg'
import img3 from '../images/header3.jpg'


const Header = () => {
    return (
        <div>
            <Routes>
                <Route path="/" exact element={               
                    <img src={img1} alt="books" />
                } />
                <Route path="/products" element={              
                    <img src={img2} alt="books" />
                } />
                <Route path="/login" element={              
                    <img src={img3} alt="books" />
                } />
                <Route path="/tags" element={                
                    <img src={img1} alt="books" />
                } />
            </Routes>
        </div>
    );
}

export default Header;