import React from 'react';
import { motion, scale } from "motion/react"
import Bookone from '../../assets/book1.json'
import Booktwo from '../../assets/book2.json'
import Bookthree from '../../assets/book3.json'
import Lottie from 'lottie-react';

const Banner = () => {
    return (
      <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative flex-col lg:flex-row w-full h-[70vh] ">
     
     <div className='justify-center items-center lg:pt-36 p-4'>
        <motion.h1
        initial={{scale:0}}
        animate={{scale:1,transition:{duration:4}}}
         className=' text-3xl font-bold '>Build your bookshelf, write reviews, and see what others are reading.</motion.h1>
     </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative flex-col lg:flex-row w-full h-[70vh]">
  <Lottie  style={{width:'400px'}} animationData={Booktwo} loop={true}></Lottie>
     <div className='justify-center items-center lg:pt-36 p-4'>
        <motion.h1
        initial={{scale:0}}
        animate={{scale:1,transition:{duration:4}}}
         className=' text-3xl font-bold '>Your personal digital shelf to log books, share reviews, and discover what to read next.</motion.h1>
     </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative flex-col lg:flex-row w-full h-[70vh]">
    <Lottie  style={{width:'400px'}} animationData={Bookthree} loop={true}></Lottie>
     <div className='justify-center items-center lg:pt-36 p-4'>
        <motion.h1
        initial={{scale:0}}
        animate={{scale:1,transition:{duration:4}}}
         className=' text-3xl font-bold '>Build your bookshelf, write reviews, and see what others are reading..</motion.h1>
     </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
    );
};

export default Banner;