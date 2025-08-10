import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 }
    })
  };

  return (
    <section className="w-full">
      {/* Hero */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-400 text-white py-16 text-center shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-lg md:text-xl opacity-90"
        >
          Your privacy matters. Here’s how we protect, handle, and respect your data.
        </motion.p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        {[
          {
            title: "Introduction",
            content: `At BookNest, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.`
          },
          {
            title: "1. Information We Collect",
            content: [
              "Your name, email, and profile photo when you sign up",
              "Your added books, reviews, and upvotes",
              "Basic usage data to improve our app performance"
            ]
          },
          {
            title: "2. How We Use Your Information",
            content: [
              "To personalize your experience within BookNest",
              "To store your reading data and preferences",
              "To improve the functionality and features of our app"
            ]
          },
          {
            title: "3. Data Security",
            content: `We implement strict security measures to protect your data from unauthorized access or disclosure. Your data is stored securely and is only accessible by authorized personnel.`
          },
          {
            title: "4. Third-Party Services",
            content: `We do not sell or share your personal information with third parties. However, we may use trusted third-party tools (like Firebase or analytics services) to enhance user experience.`
          },
          {
            title: "5. Your Consent",
            content: `By using BookNest, you consent to our Privacy Policy and agree to its terms.`
          },
          {
            title: "6. Updates to This Policy",
            content: `We may occasionally update this policy to reflect changes in our app or legal requirements. We encourage users to review this page periodically.`
          }
        ].map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-8 border-teal-500"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-teal-700">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc ml-6 space-y-2 text-lg leading-relaxed text-gray-700">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg leading-relaxed text-gray-700">{section.content}</p>
            )}
          </motion.div>
        ))}

        <motion.p
          custom={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-sm italic text-gray-500 text-center"
        >
          Last updated: July 1, 2025
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
