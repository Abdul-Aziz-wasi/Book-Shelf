import React, { useEffect, useState } from 'react';
import AllBooks from '../../components/AllBooks';
import { motion } from 'framer-motion';


const BookShelf = () => {
    
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState();
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState(''); 
  const [filteredBooks, setFilteredBooks] = useState();

  useEffect(() => {
    fetch('https://booknest-server-three.vercel.app/books') 
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let result = books;

    if (searchText.trim()) {
      result = result.filter(book =>
        book.book_title.toLowerCase().includes(searchText.toLowerCase()) ||
        book.book_author.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (filterStatus) {
      result = result.filter(book => book.reading_status === filterStatus);
    }

    setFilteredBooks(result);
  }, [searchText, filterStatus, books]);

  

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="w-full lg:w-8/12 mx-auto px-4"
    >
      
      <div className="flex flex-col mt-4 md:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="input border-2 border-teal-700 w-full md:w-1/2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          className="select  w-full md:w-1/4 border-2 border-teal-700 "
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="Want-to-Read">Want to Read</option>
        </select>
      </div>

    
     {loading ? (
  <div className="flex justify-center items-center h-64">
    <span className="loading loading-spinner loading-lg text-teal-600"></span>
  </div>
) : (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {filteredBooks.map(book => (
      <AllBooks key={book._id} book={book} />
    ))}
  </div>
)}
    </motion.div>
  );
};

export default BookShelf;
