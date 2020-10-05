import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComponent } from './MyComponent/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
                    Learn React
        </a>
      </header>
      <MyComponent text="My text"/>
    </div>
  );
}

function some(variable) {
  if (variable === '22') {
    console.log('qweq');
  }
  else {
    console.log('qweq');
  }

  if (variable) {
    console.log('qq');
  }

  switch (variable) {
    case 333:
      console.log('qweq');
      break;

    default:
      console.log('qweq');
      break;
  }

  try {
    console.log('qweq');
  }
  catch (error) {
    console.log('qweq');
  }
  finally {
    console.log('qweq');
  }
}

export default App;
