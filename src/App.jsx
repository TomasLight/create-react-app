import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { MyComponent } from './MyComponent/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          // src={logo}
          src={'./logo.svg'}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React aaaa
        </a>
      </header>
      <MyComponent text="My text"/>
    </div>
  );
}

export default App;
