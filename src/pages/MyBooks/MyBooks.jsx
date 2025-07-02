import { useEffect, useState, use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import EditBookModal from '../../components/EditBookModal/EditBookModal';
import { motion } from 'framer-motion';

const MyBooks = () => {
  const { user } = use(AuthContext);
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://booknest-server-three.vercel.app/my-books/${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`
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
      const res = await fetch(`https://booknest-server-three.vercel.app/books/${id}`, {
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
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto mt-10 p-4"
    >
      <h2 className="text-3xl font-semibold mb-6">📚 My Books</h2>

      {books.length === 0 ? (
        <p className="text-gray-600">You haven’t added any books yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full table-zebra text-sm">
            <thead>
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book._id}>
                  <td>
                    <img src={book.cover_photo} alt={book.book_title} className="h-14 w-10 object-cover rounded" />
                  </td>
                  <td>{book.book_title}</td>
                  <td>{book.book_author}</td>
                  <td>{book.total_page}</td>
                  <td>{book.book_category}</td>
                  <td>{book.reading_status}</td>
                  <td className="space-x-2">
                    <button onClick={() => handleUpdate(book)} className="btn btn-xs btn-info">Edit</button>
                    <button onClick={() => handleDelete(book._id)} className="btn btn-xs btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editingBook && (
        <EditBookModal
          book={editingBook}
          onClose={handleModalClose}
          onUpdateSuccess={handleUpdateSuccess}
        />
      )}
    </motion.div>
  );
};

export default MyBooks;
