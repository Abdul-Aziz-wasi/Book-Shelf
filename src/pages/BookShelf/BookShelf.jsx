import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import AllBooks from '../../components/AllBooks';

const BookShelf = () => {
   const books =useLoaderData()

  


    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 w-full lg:w-8/12 mx-auto'>
            {
                books.map(book=><Suspense key={book._id} fallback={<p><span className="loading loading-spinner text-error"></span></p>}>
                    <AllBooks  book={book}></AllBooks>
                </Suspense>)
            }
        </div>
    );
};

export default BookShelf;