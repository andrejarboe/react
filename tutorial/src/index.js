import React from 'react'
import ReactDom from 'react-dom/client'

import './index.css'

const book1 = {
  author: 'James Clear',
  title: 'Atomic Habits',
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
}

const book2 = {
  author: 'Collen Hoover',
  title: 'It Starts with Us: A Novel (It Ends with Us)',
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg',
}
const book3 = {
  author: 'Collen Hoover',
  title: 'It Ends with Us: A Novel (1)',
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/81s0B6NYXML._AC_UL600_SR600,400_.jpg',
}
const book4 = {
  author: 'Bonnie Garmus',
  title: 'Lessons in Chemistry: A Novel',
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/71f266wrP+L._AC_UL600_SR600,400_.jpg',
}
const book5 = {
  author: 'Jennie Casselman & Andres Chaparro',
  title: 'Eager 2 Cook, Healthy Recipes for Healthy Living: Beef & Poultry',
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/612Ko7Ps0uL._AC_UL600_SR600,400_.jpg',
}
const book6 = {
  author: 'Taylor Jenkins Reid',
  title: 'The Seven Husbands of Evelyn Hugo: A Novel',
  imgSrc:
    'https://images-na.ssl-images-amazon.com/images/I/71ZvnK+4JiL._AC_UL300_SR300,200_.jpg',
}

const title = 'Atomic Habbits'
const author = 'James Clear'
const imgSrc =
  'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL600_SR600,400_.jpg'

function Greating() {
  return (
    <div>
      <h2>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/john-smilga/react-course-v3/tree/main/01-fundamentals"
        >
          React Course Notes!
        </a>
      </h2>
      <BookList />
    </div>
  )
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book imgSrc={book1.imgSrc} title={book1.title} author={book1.author} />
      <Book imgSrc={book2.imgSrc} title={book2.title} author={book2.author} />
      <Book imgSrc={book3.imgSrc} title={book3.title} author={book3.author} />
      <Book imgSrc={book4.imgSrc} title={book4.title} author={book4.author} />
      <Book imgSrc={book5.imgSrc} title={book5.title} author={book5.author} />
      <Book imgSrc={book6.imgSrc} title={book6.title} author={book6.author} />
    </section>
  )
}

const Book = (props) => {
  const { imgSrc, author, title } = props
  return (
    <article className="book">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Greating />)
