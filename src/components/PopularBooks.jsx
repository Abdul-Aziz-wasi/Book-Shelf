import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/popular-books') // 
      .then(res => res.json())
      .then(data => setPopularBooks(data))
      .catch(error => console.log('inside error', error));
  }, []);

  return (
  
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-8">📚 Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {popularBooks.map(book => (
            <div key={book._id} className="bg-white rounded-xl shadow p-4">
              <img
                src={book.cover_photo}
                alt={book.book_title}
                className="h-64 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{book.book_title}</h3>
              <p className="text-gray-600 text-sm">by {book.book_author}</p>
              <p className="text-teal-500 mt-2">❤️ {book.upvotes} upvotes</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  
  );
};

export default PopularBooks;
