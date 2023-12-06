import React from 'react'
import "./style.css";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <div className='page-footer'>
        <div className="container">
            <div className="footer-content">
                <p className='footer-text'>
                    <span>hotcoffe</span>
                    {new Date().getFullYear()}
                     copyright all rights reserved
                </p>

                <div className="footer-media">

                    <a href="#" className="media-link">
                        <img src={instagram} alt="instagram-icon" width={24} height={22}/>
                    </a>
                    <a href="#" className="media-link">
                        <img src={twitter} alt="twitter-icon"/>
                    </a>
                    <a href="#" className="media-link">
                        <img src={linkedin} alt="linkedin-icon" width={24} height={22}/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer