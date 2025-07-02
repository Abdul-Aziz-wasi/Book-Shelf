import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-5xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl font-bold text-teal-700 text-center mb-6">About Us</h2>
      <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 text-gray-700 leading-relaxed space-y-4">
        <p>
          <strong>BookNest</strong> is a personal virtual bookshelf app designed to help readers organize, track, and explore their favorite books in a digital space.
          Whether you're an avid reader or just starting out, BookNest gives you the tools to manage your reading journey with ease.
        </p>

        <p>
          With features like categorized book storage, reading status filters, upvoting popular titles, and user reviews, BookNest is more than just a bookshelf—it's a community of readers.
          You can search by title or author, keep track of what you've read, and discover books loved by others.
        </p>

        <p>
          Our mission is simple: <span className="text-teal-600 font-medium">make reading organized, engaging, and social.</span>
          BookNest is built with love using modern web technologies like React, Tailwind CSS, and Node.js.
        </p>

        <p className="italic text-sm text-gray-500">
          “A room without books is like a body without a soul.” – Marcus Tullius Cicero
        </p>
      </div>
    </motion.section>
  );
};

export default About;
