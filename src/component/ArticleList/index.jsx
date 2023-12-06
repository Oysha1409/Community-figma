import React from 'react'
import "./style.css";

import ArticleImg1 from "../../assets/ArticleList-img1.png";
import ArticleImg2 from "../../assets/ArticleList-img2.png";
import ArticleImg3 from "../../assets/ArticleList-img3.png";
import ArticleCard from '../ArticleCard';

const ArticleList = () => {

    const articleData = [
        {
            id: 0,
            img: ArticleImg1,
            title: "long established",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
            date: "May 20th 2020",
            link: "Read more",
        },
        {
            id: 1,
            img: ArticleImg2,
            title: "long established",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
            date: "May 20th 2020",
            link: "Read more",
        },
        {
            id: 2,
            img: ArticleImg3,
            title: "long established",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
            date: "May 20th 2020",
            link: "Read more",
        }
    ]
    return (
        <div className='container'>
           <div className="article-list_content">
           {articleData.map((el) => (
                <ArticleCard key={el.id} {...el} />
            ))}
           </div>
        </div>
    );
};

export default ArticleList;