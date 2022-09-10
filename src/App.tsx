import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Footer, Navbar } from './components';
import { Homepage, Cryptocurrencies, CryptoDetails, News } from './pages';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
        <Footer />
      </main>
    </div>
  );
}

export default App;
