import React from 'react';

import { motion } from "framer-motion";

const comments = [
  "Absolutely loved the storyline!",
  "The book changed how I see things.",
  "Well-written and deeply engaging.",
  "Characters were so relatable!",
  "Couldn't put it down until the end!",
  "A masterpiece in modern literature.",
  "Visually stunning cover too!",
  "Perfect blend of mystery and drama.",
  "Highly recommend to all readers!",
  "Truly a journey worth taking.",
];

const Comments = () => {
  return (
    <section className="py-10 bg-white max-w-6xl mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold text-teal-800 text-center mb-6">
        What Readers Are Saying...
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "easeInOut",
            duration: 30, 
          }}
        >
          {[...comments, ...comments].map((text, idx) => (
            <div
              key={idx}
              className=" p-6 bg-white border border-b-cyan-700 shadow-md rounded-lg text-center"
            >
              <p className="italic font-bold">"{text}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Comments;
