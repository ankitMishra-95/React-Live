import React from 'react'

const Header = () => (
    <header>
       <div className="container mainContainer">
        <div className="logo">
                <a href="/">Food Mania</a>
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>
       </div>
    </header>
);

export default Header