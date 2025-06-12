import React, { useEffect, useState } from 'react';


const BookCategories = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/book-categories') 
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error loading categories:", err));
  }, []);
    return (
        <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-teal-800 mb-8"> Featured Categories...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-purple-100 rounded-xl shadow p-4 hover:bg-purple-200 transition">
              <img
                src={cat.cover_photo}
                alt={cat._id}
                className="h-48 w-full object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold">{cat._id}</h3>
              <p className="text-gray-700 text-sm">{cat.count} books</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default BookCategories;