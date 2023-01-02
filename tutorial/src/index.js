import React from 'react'
import ReactDom from 'react-dom/client'

function Greating() {
  return (
    <div>
      <h2>
        <a
          target="_blank"
          href="https://github.com/john-smilga/react-course-v3/tree/main/01-fundamentals"
        >
          React Course Notes!
        </a>
      </h2>
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<Greating />)
