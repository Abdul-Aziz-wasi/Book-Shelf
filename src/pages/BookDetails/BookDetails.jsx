import React from 'react';
import { useLoaderData } from 'react-router';

const BookDetails = () => {
const books =useLoaderData()
const {book_title,cover_photo,book_author,total_page,book_category,reading_status,book_overview}=books
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={cover_photo}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='lg:pl-8'>
      <h1 className="text-3xl font-bold pb-4">{book_title}</h1>
      <h1 className='text-2xl font-semibold '>Author: <span className='text-teal-700'>{book_author}</span></h1>
      <h1 className='text-2xl font-semibold'>Category: <span className='text-teal-700'>{book_category}</span></h1>
      <h1 className='text-2xl font-semibold'>Pages: <span className='text-teal-700'>{total_page}</span></h1>
      <h1 className='text-2xl font-semibold'>Status: <span className='text-teal-700'>{reading_status}</span></h1>
      <p className="py-6 text-gray-500 font-semibold">
        {book_overview}
      </p>
      
    </div>
  </div>
</div>
    );
};

export default BookDetails;