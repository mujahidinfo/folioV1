import React from 'react';
import photo from '../../Assets/Mujahid.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className=" container">
            <div className="hero-section">
            <div className="text-area">
                <h3>Hi, I’m</h3>
                <h1>MUJAHID ISLAM</h1>
                <h4>Professional Motion Designer</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="img-area">
                <img src={photo} alt="" />
            </div>
        </div>
        </div>
        
        
    );
};

export default Header;