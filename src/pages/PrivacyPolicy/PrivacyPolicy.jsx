import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-5xl mx-auto px-4 py-12 text-gray-700"
    >
      <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">Privacy Policy</h2>

      <div className="bg-white shadow-md rounded-2xl p-6 md:p-10 space-y-6">
        <p>
          At <strong>BookNest</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-2">1. Information We Collect</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>Your name, email, and profile photo when you sign up</li>
            <li>Your added books, reviews, and upvotes</li>
            <li>Basic usage data to improve our app performance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">2. How We Use Your Information</h3>
          <ul className="list-disc ml-6 space-y-1">
            <li>To personalize your experience within BookNest</li>
            <li>To store your reading data and preferences</li>
            <li>To improve the functionality and features of our app</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">3. Data Security</h3>
          <p>
            We implement strict security measures to protect your data from unauthorized access or disclosure. Your data is stored securely and is only accessible by authorized personnel.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">4. Third-Party Services</h3>
          <p>
            We do not sell or share your personal information with third parties. However, we may use trusted third-party tools (like Firebase or analytics services) to enhance user experience.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">5. Your Consent</h3>
          <p>
            By using BookNest, you consent to our Privacy Policy and agree to its terms.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">6. Updates to This Policy</h3>
          <p>
            We may occasionally update this policy to reflect changes in our app or legal requirements. We encourage users to review this page periodically.
          </p>
        </div>

        <p className="text-sm italic text-gray-500">
          Last updated: July 1, 2025
        </p>
      </div>
    </motion.section>
  );
};

export default PrivacyPolicy;
