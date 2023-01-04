import React from 'react'
import ReactDom from 'react-dom/client'

import './index.css'

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
      <Book
        imgSrc={imgSrc}
        title={title}
        author={author}
      />
      <Book
        imgSrc={imgSrc}
        title={title}
        author={author}
      />
      <Book
        imgSrc={imgSrc}
        title={title}
        author={author}
      />
      <Book
        imgSrc={imgSrc}
        title={title}
        author={author}
      />
      <Book
        imgSrc={imgSrc}
        title={title}
        author={author}
      />

    </section>
  )
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.imgSrc} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Greating />)
