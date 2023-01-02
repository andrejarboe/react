import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* https://github.com/john-smilga/react-course-v3 */}
        <a href="https://github.com/john-smilga/react-course-v3" target="_blank">
          React Course Notes
        </a>
      </header>
    </div>
  );
}

export default App;
