import React from 'react'
import "./style.css";
import ItemImg from "../../assets/item-image.png";
const ArticleItem = () => {
    return (
        <div className='article-item'>
            <div className="container item-container">
                <div className="article-item_content">
                    <div className="item-info">
                        <h2 className="item-info_title">
                            What is Lorem Ipsum?
                        </h2>
                        <p className="item-info_text">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            The point of using Lorem Ipsum is that it has a more-or-less normal distribution...
                            <div className="article-date item-date">
                                <span className='date'>May 20</span>
                                <a href="#" className="article-link">Read more</a>
                            </div>

                        </p>
                    </div>

                    <div className="item-img">
                        <img src={ItemImg} alt="office-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleItem