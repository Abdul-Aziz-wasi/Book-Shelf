import { use,  useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const AddBooks = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    book_title: '',
    cover_photo: '',
    total_page: '',
    book_author: '',
    book_category: 'Fiction',
    reading_status: 'Want-to-Read',
    book_overview: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      ...formData,
      user_email: user.email,
      user_name: user.displayName || user.email,
    };

    const res = await fetch('https://booknest-server-three.vercel.app/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    if (result.success) {
      navigate('/'); 
      Swal.fire({
  title: "Added book successful!",
  icon: "success",
  draggable: true
});
    } else {
      navigate('/'); 
      Swal.fire({
  title: "Failed added book!",
  icon: "success",
  draggable: true
});
    }
  };

  return (
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-4">📚 Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="book_title" onChange={handleChange} value={formData.book_title} className="input input-bordered w-full" placeholder="Book Title" required />
        <input name="cover_photo" onChange={handleChange} value={formData.cover_photo} className="input input-bordered w-full" placeholder="Cover Photo URL" required />
        <input name="total_page" type="number" onChange={handleChange} value={formData.total_page} className="input input-bordered w-full" placeholder="Total Pages" required />
        <input name="book_author" onChange={handleChange} value={formData.book_author} className="input input-bordered w-full" placeholder="Author" required />

        <select name="book_category" onChange={handleChange} value={formData.book_category} className="select select-bordered w-full">
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Fantasy</option>
        </select>

        <select name="reading_status" onChange={handleChange} value={formData.reading_status} className="select select-bordered w-full">
          <option>Read</option>
          <option>Reading</option>
          <option>Want-to-Read</option>
        </select>

        <textarea name="book_overview" onChange={handleChange} value={formData.book_overview} className="textarea textarea-bordered w-full" placeholder="Book Overview" rows={4}></textarea>

        <div className="bg-gray-100 p-3 rounded">
          <p><strong>Your Email:</strong> {user.email}</p>
          <p><strong>Your Name:</strong> {user.displayName || user.email}</p>
          <p><strong>Upvotes:</strong> 0 (initial)</p>
        </div>

        <button type="submit" className="btn bg-teal-800 text-white w-full">Add Book</button>
      </form>
    </motion.div>
  );
};

export default AddBooks;
