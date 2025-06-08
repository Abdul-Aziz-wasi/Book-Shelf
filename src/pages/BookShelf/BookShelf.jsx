import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AllBooks from '../../components/AllBooks';
import { motion, scale } from "motion/react"

const BookShelf = () => {
   const books =useLoaderData()

  


    return (
        <motion.div
         initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      
         className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 w-full lg:w-8/12 mx-auto'>
            {
                books.map(book=><Suspense key={book._id} fallback={<p><span className="loading loading-spinner text-error"></span></p>}>
                    <AllBooks  book={book}></AllBooks>
                </Suspense>)
            }
        </motion.div>
    );
};

export default BookShelf;