import { useState } from 'react';
import Swal from 'sweetalert2';

const EditBookModal = ({ book, onClose, onUpdateSuccess }) => {
  const [formData, setFormData] = useState({ ...book });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/books/${book._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await res.json();
    if (result.success) {
      Swal.fire('Updated!', 'Book has been updated.', 'success');
      onUpdateSuccess({ ...formData, _id: book._id });
    } else {
      Swal.fire('Error', 'Failed to update book', 'error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
        <form onSubmit={handleUpdate} className="space-y-3">
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
          <textarea name="book_overview" onChange={handleChange} value={formData.book_overview} className="textarea textarea-bordered w-full" placeholder="Overview" rows={4}></textarea>

          <div className="flex justify-end gap-2 pt-2">
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookModal;
