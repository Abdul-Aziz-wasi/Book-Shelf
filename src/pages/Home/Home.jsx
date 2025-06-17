import React from 'react';
import Banner from './Banner';
import PopularBooks from '../../components/PopularBooks';
import BookCategories from '../../components/BookCategories';
import { motion, scale } from "motion/react"
import Comments from '../../components/Comments/Comments';
import Faq from '../../components/FAQ/Faq';


const Home = () => {
    return (
        <motion.div
         initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
        >
            <Banner></Banner>
            <PopularBooks></PopularBooks>
            <BookCategories></BookCategories>
            <Comments></Comments>
            <Faq></Faq>
            
        </motion.div>
    );
};

export default Home;