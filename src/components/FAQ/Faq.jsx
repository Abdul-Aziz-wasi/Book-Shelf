import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-6xl mx-auto'>
          <h3 className='text-3xl font-bold text-teal-800 text-center py-4'>FAQ </h3>
  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-2" defaultChecked />
    <div className="collapse-title font-semibold">How do I add a new book to my shelf?</div>
    <div className="collapse-content text-sm">
      Navigate to the "Add Book" page from the navigation menu, fill in the book details, and click "Submit".
    </div>
  </div>
  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title font-semibold">Can I edit or delete a book I’ve added?</div>
    <div className="collapse-content text-sm">
      Yes. Go to "My Books", then click "Edit" or "Delete" on the book you want to update or remove.
    </div>
  </div>
  <div className="collapse collapse-arrow bg-base-100 border border-base-300">
    <input type="radio" name="my-accordion-2" />
    <div className="collapse-title font-semibold">How does the upvote feature work?</div>
    <div className="collapse-content text-sm">
      Each user can upvote a book once. The total upvotes help highlight popular books on the platform.
    </div>
  </div>
</div>

    );
};

export default Faq;