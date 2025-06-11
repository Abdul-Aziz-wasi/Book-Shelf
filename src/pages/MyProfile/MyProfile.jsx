import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";


ChartJS.register(ArcElement, Tooltip, Legend);

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-books/${user.email}`)
        .then(res => res.json())
        .then(data => setBooks(data))
        .catch(err => console.error("Fetch error:", err));
    }
  }, [user]);

  const categoryCount = books.reduce((acc, book) => {
    acc[book.book_category] = (acc[book.book_category] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(categoryCount);
  const values = Object.values(categoryCount);

  const pieChartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"]
      }
    ]
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user?.displayName}</h2>
      <p className="text-gray-600 mb-6">Email: {user?.email}</p>

      <div>
        <h3 className="text-lg font-semibold mb-2">Books by Category</h3>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
};

export default MyProfile;
