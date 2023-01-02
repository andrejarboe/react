import React from 'react'
import ReactDom from 'react-dom/client'

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
      <BookList />
      <BookList />
    </div>
  )
}

const BookList = () => {
    return <section>
      <Book />
  </section>
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL600_SR600,400_.jpg"
    alt="Atomic Habits"
  />
)
const Title = () => {
  return <h2>Atomic Habits</h2>
}
const Author = () => <h4>James Clear</h4>

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Greating />)
