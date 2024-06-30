import React from 'react'
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Container from './components/main'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </div>
  );
}

export default App;
