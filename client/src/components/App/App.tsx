import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { MyComponent, StyledButton } from './App.style';

const App: React.FC = () => {
  return (
    <MyComponent>
      <header className="App-header">
        <StyledButton></StyledButton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </MyComponent>
  );
};

export default App;
