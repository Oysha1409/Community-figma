import React from 'react'
import "./style.css";
import banner_img from "../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className='banner-section'>
                <div className="container">
                    <div className="content">
                        <div className="banner-info">
                            <h1 className='banner-info_title'>Make better
                                coffee </h1>
                            <p className="banner-info_text">
                                why learn how to blog?
                            </p>
                        </div>
                        <div className="banner-img">
                            <img src={banner_img} alt="people" className='banner-img_image' />
                        </div>
                    </div>
                </div>    
    </div>
  );
};

export default Banner;