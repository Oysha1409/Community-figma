import React from 'react';
import Header from '../component/Header/Header';
import "../pages/style.css";

import { Link } from 'react-router-dom';
import Articles from './Articles';
import Banner from '../component/Banner';
import Article from '../component/Article';
import ArticleList from '../component/ArticleList';
import Footer from '../component/Footer';
import ArticleItem from '../component/ArticleItem';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Article />
            <ArticleList />
            <ArticleItem />
            <Footer />
        </div>
    );
};

export default Home;