import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 }
    })
  };

  return (
    <section className="w-full">
      {/* Hero */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          About <span className="text-yellow-200">BookNest</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg md:text-xl opacity-90"
        >
          Your personal reading companion — organized, social, and inspiring.
        </motion.p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">

        {/* Part 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="bg-white rounded-2xl shadow-xl p-10 border-l-8 border-teal-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-700">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>BookNest</strong> is a personal virtual bookshelf app designed to help readers
            organize, track, and explore their favorite books in a digital space. Whether you’re an avid reader
            or just starting out, BookNest gives you the tools to manage your reading journey with ease.
          </p>
        </motion.div>

        {/* Part 2 */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="bg-white rounded-2xl shadow-xl p-10 border-l-8 border-teal-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-700">Features that Empower</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            With categorized book storage, reading status filters, upvoting popular titles, and user reviews,
            BookNest is more than just a bookshelf — it’s a vibrant community of readers. Search by title or
            author, track what you’ve read, and discover books loved by others.
          </p>
        </motion.div>

        {/* Part 3 */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="bg-white rounded-2xl shadow-xl p-10 border-l-8 border-teal-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-700">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Our mission is simple: <span className="text-teal-600 font-medium">make reading organized, engaging, and social.</span> 
            We believe that books should connect people, spark conversations, and inspire growth.
          </p>
        </motion.div>

        {/* Part 4 */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="bg-white rounded-2xl shadow-xl p-10 border-l-8 border-teal-500"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-700">The Community</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We’re building a platform where readers share experiences, recommend must-reads, and
            celebrate their favorite stories. BookNest isn’t just for storing books — it’s for sharing them.
          </p>
        </motion.div>

        {/* Part 5 */}
        <motion.div
          custom={4}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl shadow-inner p-10 text-center italic text-gray-700"
        >
          <p className="text-lg md:text-xl">
            “A room without books is like a body without a soul.” – Marcus Tullius Cicero
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
