import React from 'react'

import "../../pages/Home";
import "../../pages/Articles";
import "./style.css";

import search_icon from "../../assets/search.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='page-header'>
            <div className="container">
                <div className="content">
                    <Link to={"/"} className='logo'>
                        HotCoffee
                    </Link>

                    <div className="user-action">
                        <form action="" className='user-action_form'>
                            <label htmlFor="search">
                                <img src={search_icon} width={20} height={20}
                                    className='search-icon'
                                    alt="search" />
                            </label>
                            <input type="search" placeholder='Search....' id='search' className='user-action_input' />
                        </form>

                        <nav className="header-nav">
                            <Link to='/' className='header-nav_link'>
                                Home
                            </Link>
                            <Link to='/articles' className='header-nav_link'>
                                Articles
                            </Link>

                            <a href="#" className='header-nav_media-link'>
                                <img src={instagram} alt="instagram-icon" />
                            </a>
                            <a href="#" className='header-nav_media-link'>
                                <img src={twitter} alt="twitter-icon" />
                            </a>
                            <a href="#" className='header-nav_media-link'>
                                <img src={linkedin} alt="linkedin-icon" />
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;