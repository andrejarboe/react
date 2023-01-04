import React from 'react';
import ReactDom from 'react-dom/client';

import './index.css';

// we are geting an exat item so use { }
import { books } from './books';
import Book from './Book';

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
            number={index}
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

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Greating />);
