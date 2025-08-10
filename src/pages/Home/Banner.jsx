import React from 'react';
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="carousel w-full">
      
      {/* Slide 1 */}
      <div
        id="slide1"
        className="carousel-item relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://rtl.booklovers.ancorathemes.com/wp-content/uploads/2021/02/post28-copyright-1536x1024.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center p-4">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 4 } }}
            className="text-2xl lg:text-2xl font-semibold text-white text-center max-w-3xl"
          >
            Build your bookshelf <br />
            <span className='text-sm font-normal '> write reviews, and see what others are reading.</span><br />
            <button className='btn btn-primary'>Explore books</button>
          </motion.h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        id="slide2"
        className="carousel-item relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://rtl.booklovers.ancorathemes.com/wp-content/uploads/2020/05/post2-copyright-1024x766.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center p-4">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 4 } }}
            className="text-2xl lg:text-2xl font-semibold text-white text-center max-w-3xl"
          >
            Your personal digital shelf <br />
            <span className='text-sm font-normal '> to log books, share reviews, and discover what to read next.</span>
            <br />
            <button className='btn btn-primary'>Explore books</button>
          </motion.h1>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        id="slide3"
        className="carousel-item relative w-full h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://rtl.booklovers.ancorathemes.com/wp-content/uploads/2020/05/post1-copyright-1024x766.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center p-4">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 4 } }}
            className="text-2xl lg:text-2xl font-smibold text-white text-center max-w-3xl"
          >
            Build your bookshelf <br />
            <span className='text-sm font-normal '> write reviews, and see what others are reading..</span>
            <br />
            <button className='btn btn-primary'>Explore books</button>
          </motion.h1>
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
