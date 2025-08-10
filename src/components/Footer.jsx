import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
         <Link to='/' className="text-3xl font-bold text-teal-800">
         <span className="text-yellow-300">Book</span><span className="text-white">Nest</span>
        </Link>
          <p className="text-sm text-gray-400">Your digital bookshelf</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: booknest@booknest.com</p>
          <p>Phone: +11010101010100110</p>
          <p>Address: 123 Library Lane, Dhaka</p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-2">Social Links</h3>
          

          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/ma.aziz.79025" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl hover:text-sky-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>

      
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Book Nest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
