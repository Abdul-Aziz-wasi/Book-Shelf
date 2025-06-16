import { useEffect, useState,  use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import EditBookModal from '../../components/EditBookModal/EditBookModal';
import { motion } from 'framer-motion';


const MyBooks = () => {
  const { user} = use(AuthContext);
  console.log(user.accessToken)
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);


  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-books/${user.email}`,{
        headers:{
          authorization:`Bearer ${user.accessToken}`
        }
      })
        .then(res => res.json())
        .then(data => setBooks(data));
    }
  }, [user]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: 'This will permanently delete the book.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirm.isConfirmed) {
      const res = await fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_email: user.email })
      });
      const result = await res.json();
      if (result.success) {
        setBooks(prev => prev.filter(book => book._id !== id));
        Swal.fire('Deleted!', 'Book has been deleted.', 'success');
      }
    }
  };

  const handleUpdate = (book) => {
    setEditingBook(book);
  };

  const handleModalClose = () => {
    setEditingBook(null);
  };

  const handleUpdateSuccess = (updatedBook) => {
    setBooks(prev =>
      prev.map(book => (book._id === updatedBook._id ? updatedBook : book))
    );
    handleModalClose();
  };

  return (
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }} className="max-w-6xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-semibold mb-6">📚 My Books</h2>
      {books.length === 0 ? (
        <p className="text-gray-600">You haven’t added any books yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map(book => (
            <div key={book._id} className="bg-white p-4 shadow rounded-lg">
              <img src={book.cover_photo} alt={book.book_title} className="h-48 w-full object-cover rounded mb-3" />
              <h3 className="text-xl font-bold">{book.book_title}</h3>
              <p className="text-sm text-gray-600">Author: {book.book_author}</p>
              <p className="text-sm text-gray-600">Pages: {book.total_page}</p>
              <div className="flex justify-between mt-3">
                <button onClick={() => handleUpdate(book)} className="btn btn-sm btn-outline btn-info">Edit</button>
                <button onClick={() => handleDelete(book._id)} className="btn btn-sm btn-outline btn-error">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingBook && (
        <EditBookModal 
         book={editingBook}
          onClose={handleModalClose}
          onUpdateSuccess={handleUpdateSuccess}
        ></EditBookModal>
        
      )}
    </motion.div>
  );
};

export default MyBooks;
