import React from 'react';
import { useLoaderData } from 'react-router';

const BookShelf = () => {
   const books =useLoaderData()

  


    return (
        <div>
            {
                books.length
            }
        </div>
    );
};

export default BookShelf;