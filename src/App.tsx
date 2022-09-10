import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <Navbar />
      </header>
      <main className="main"></main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
