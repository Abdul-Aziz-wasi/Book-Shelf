import React from 'react';
import { Link } from 'react-router';

const AllBooks = ({ book }) => {
  const {
    cover_photo,
    book_title,
    book_author,
    book_category,
    upvotes,
    _id
  } = book;

  if (!book) {
    return (
      <p className="text-center mt-10">
        <span className="loading loading-spinner text-warning"></span>
      </p>
    );
  }

  return (
    <Link
      to={`/books/${_id}`}
      className="transition transform hover:scale-[1.01] duration-300"
    >
      <div className="w-full h-full bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden flex flex-col">
        <div className="overflow-hidden">
          <img
            src={cover_photo}
            alt={book_title}
            className="h-60 w-full object-cover rounded-t-2xl transition duration-300 hover:scale-105"
          />
        </div>
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">{book_title}</h2>
            <p className="text-sm text-gray-500">
              By <span className="font-medium text-gray-700">{book_author}</span>
            </p>
            <span className="inline-block text-xs text-white bg-teal-800 px-2 py-1 rounded-full">
              {book_category}
            </span>
          </div>
          <div className="mt-4">
            <button className="text-sm font-medium text-red-600 border border-red-200 rounded-md px-3 py-1 hover:bg-red-50 transition">
              ❤️ {upvotes} Upvotes
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllBooks;
