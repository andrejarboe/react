import React from 'react';

const Book = (props) => {
  const { imgSrc, author, title, displayValue, getBook, id, number, children } = props;

  const displayTitle = () => {
    console.log(title);
  };

  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className="book">
      <span className="number">{`# ${number + 1}`}</span>

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

export default Book;
