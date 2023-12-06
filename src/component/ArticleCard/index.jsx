import React from 'react'
import "./style.css";

const ArticleCard = ({ title, img, text, date, link }) => {
    return (
        <div className='article-card'>
            <img src={img} alt={title} className='article-card_img' />

            <div className="article-card_info">
                <h3 className="card-info_title">{title}</h3>
                <p className="article-text">{text}</p>

                <div className="article-date">
                    <span className='date'> {date}</span>
                    <a href="/articles" className='article-link'>{link}</a>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;