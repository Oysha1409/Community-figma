import React from 'react'
import Articles from '../../pages/Articles';
import "./style.css";
import article_img from "../../assets/long-people_img.png";


const Article = () => {
  return (
    <div className='article'>
         <div className="container">
                    <div className="article-content">
                        <div className="article-info">
                            <h2 className="article-title">
                                long established
                            </h2>
                            <p className="article-text">
                                It is a long established fact that a reader will be distracted by the readable content 
                                of a page when looking at its layout. The point of using Lorem Ipsum is that....
                            </p>
                            <div className="article-date">
                                <span className='date'>May 20th 2020</span>
                                <a href='' className='article-link'> Read more</a>
                            </div>
                        </div>
                        <div className="article-img">
                            <img src={article_img} alt="people-img" />
                        </div>
                    </div>
                </div>
    </div>
  );
};

export default Article;