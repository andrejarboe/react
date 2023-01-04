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
      <h2>
        <a
          href="https://reactjs.org/docs/events.html"
          target="_blank"
          rel="noreferrer"
        >
          React Events
        </a>
      </h2>
      <BookList />
    </div>
  );
}

const BookList = () => {
  // Prop Drilling
  const someValue = 'shakeAndBake';
  const displayValue = () => {
    console.log(someValue);
  };

    const getBook = (id) => {
      const book = books.find((book) => book.id === id);
      console.log(book);
    };

  return (
    <section className="booklist">
      <EventExamples />
      {/* index as the key only works when you know th list will not change */}
      {books.map((book, index) => {
        console.log(book);
        return (
          <Book
            key={book.id}
            {...book}
            displayValue={displayValue}
            getBook={getBook}
          />
        );
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };

  const handleButtonClick = () => {
    alert('handle button click');
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit' */}
        <button type="submit">submit form</button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { imgSrc, author, title, displayValue, getBook, id, children } = props;

  const displayTitle = () => {
    console.log(title);
  };

    const getSingleBook = () => {
      getBook(id);
    };

  return (
    <article className="book">
      <img
        src={imgSrc}
        alt={title}
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={displayTitle}>display title</button>
      <button onClick={displayValue}>click me</button>
      <button onClick={getSingleBook}>Log Book ID</button>
      {children}
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Greating />);
