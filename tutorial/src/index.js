import React from 'react';
import ReactDom from 'react-dom/client'

export default function Greating() {
    return <h2>My First Component</h2>;
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<Greating />);