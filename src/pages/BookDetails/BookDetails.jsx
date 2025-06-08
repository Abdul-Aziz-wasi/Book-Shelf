import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const BookDetails = () => {   
const { user } = use(AuthContext);
const books =useLoaderData()
const [book, setBook] = useState(books);
const {book_title,cover_photo,book_author,total_page,book_category,reading_status,book_overview}=books

  const handleUpvote = () => {
    fetch(`http://localhost:3000/books/upvote/${book._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_email: user.email })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBook(prev => ({ ...prev, upvotes: (prev.upvotes || 0) + 1 }));
        } else {
          console.log(data.message);
        }
      })
      .catch(err => console.error(err));
  };

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
      {!user ? (
  <p className="text-sm text-red-500 mt-2">Please log in to upvote this book.</p>
) : user.email === book.user_email ? (
  <button className="btn btn-disabled" disabled>
    You can't upvote your own book.
  </button>
) : (
  <button onClick={handleUpvote} className="btn btn-success">
    ❤️ Upvote ({book.upvotes || 0})
  </button>
)}

    </div>
  </div>
</div>
    );
};

export default BookDetails;