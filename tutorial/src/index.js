import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

const books = [
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 1,
  },
  {
    author: 'Collen Hoover',
    title: 'It Starts with Us: A Novel (It Ends with Us)',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
  {
    author: 'Collen Hoover',
    title: 'It Ends with Us: A Novel (1)',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg',
    id: 3,
  },
  {
    author: 'Bonnie Garmus',
    title: 'Lessons in Chemistry: A Novel',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/71f266wrP+L._AC_UL600_SR600,400_.jpg',
    id: 4,
  },
  {
    author: 'Jennie Casselman & Andres Chaparro',
    title: 'Eager 2 Cook, Healthy Recipes for Healthy Living: Beef & Poultry',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/612Ko7Ps0uL._AC_UL600_SR600,400_.jpg',
    id: 5,
  },
  {
    author: 'Taylor Jenkins Reid',
    title: 'The Seven Husbands of Evelyn Hugo: A Novel',
    imgSrc:
      'https://images-na.ssl-images-amazon.com/images/I/71ZvnK+4JiL._AC_UL300_SR300,200_.jpg',
    id: 6,
  },
];

function Greating() {
  return (
    <div>
      <BookList />
    </div>
  );
}

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book);

        return (
          <Book
            {...book}
            key={book.id}
          />
        );
      })}
    </section>
  );
};

const Book = (props) => {
  const { imgSrc, author, title, children } = props;
  return (
    <article className="book">
      <img
        src={imgSrc}
        alt={title}
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Greating />);
