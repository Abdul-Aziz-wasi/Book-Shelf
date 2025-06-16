import React, { useEffect, useState,  use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const ReviewSection = ({ bookId }) => {
  const { user } = use(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [userReview, setUserReview] = useState(null);

  useEffect(() => {
    fetch(`https://booknest-server-three.vercel.app/reviews/${bookId}`)
      .then(res => res.json())
      .then(data => {
        setReviews(data);
        if (user) {
          const existing = data.find(r => r.userEmail === user.email);
          setUserReview(existing || null);
          if (existing) setNewReview(existing.content);
        }
      });
  }, [bookId, user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      bookId,
      userEmail: user.email,
      userName: user.displayName || user.email,
      content: newReview
    };

    const method = userReview ? 'PUT' : 'POST';
    const url = userReview
      ? `https://booknest-server-three.vercel.app/reviews/${bookId}/${user.email}`
      : 'https://booknest-server-three.vercel.app/reviews';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    if (result.success) {
      window.location.reload(); 
    } else {
      alert(result.message || 'Something went wrong');
    }
  };

  const handleDelete = async () => {
    const res = await fetch(`https://booknest-server-three.vercel.app/reviews/${bookId}/${user.email}`, {
      method: 'DELETE'
    });
    const result = await res.json();
    if (result.success) {
      window.location.reload(); 
    }
  };

  return (
    <div className="mt-4 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">💬 Reviews</h2>

      {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}

      {reviews.map((review, index) => (
        <div key={index} className="mb-4 p-3 border rounded-md bg-gray-50">
          <p className="font-semibold">{review.userName}</p>
          <p className="text-sm text-gray-600">{new Date(review.createdAt).toLocaleString()}</p>
          <p>{review.content}</p>
        </div>
      ))}

      {user && (
        <form onSubmit={handleSubmit} className="mt-6">
          <textarea
            className="w-full border p-2 rounded mb-2"
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
            rows={4}
          />
          <div className="flex gap-2">
            <button type="submit" className="btn btn-primary">
              {userReview ? 'Update Review' : 'Post Review'}
            </button>
            {userReview && (
              <button type="button" className="btn btn-error" onClick={handleDelete}>
                Delete Review
              </button>
            )}
          </div>
        </form>
      )}

      {!user && <p className="text-sm text-red-500">Please log in to post a review.</p>}
    </div>
  );
};

export default ReviewSection;
