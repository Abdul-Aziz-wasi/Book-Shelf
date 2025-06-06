import React from 'react';
import Banner from './Banner';
import PopularBooks from '../../components/PopularBooks';
import BookCategories from '../../components/BookCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularBooks></PopularBooks>
            <BookCategories></BookCategories>
        </div>
    );
};

export default Home;