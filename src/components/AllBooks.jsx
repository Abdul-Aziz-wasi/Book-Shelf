
import React from 'react';
import { Link } from 'react-router';

const AllBooks = ({book}) => {
    const {cover_photo,book_title,book_author,reading_status,book_category,upvotes,book_overview,_id}=book;
    if (!book) {
    return <p className="text-center mt-10"><span className="loading loading-spinner text-warning"></span></p>;
  }
    return (
 <Link to={`/books/${_id}`} className="transform hover:scale-[1.02] transition duration-200">
      <div className="card w-96 bg-white shadow-lg hover:shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <figure className="p-6">
          <img
            src={cover_photo}
            alt={book_title}
            className="rounded-xl h-64 object-cover w-full"
          />
        </figure>
        <div className="card-body  space-y-2 px-6 pb-6">
          <h2 className="card-title text-2xl text-teal-700 font-bold">{book_title}</h2>
          <h3 className="text-sm text-gray-700">
            By: <span className="text-teal-800 font-semibold">{book_author}</span>
          </h3>
          <h3 className="text-sm text-gray-700">
            Category: <span className="text-teal-800 font-semibold">{book_category}</span>
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">{book_overview}</p>
          <p className="text-sm text-gray-700">
            Status: <span className="text-teal-950 font-semibold">{reading_status}</span>
          </p>
          <div className="card-actions mt-4 justify-center">
            <button className="btn btn-outline btn-sm text-red-600 border-red-300 hover:bg-red-100">
              ❤️ {upvotes} Upvotes
            </button>
          </div>
        </div>
      </div>
    </Link>
    );
};

export default AllBooks;