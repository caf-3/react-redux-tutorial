import './App.css';
// Components
import Header from './components/Header'
import List from './components/Product/List'
import Details from './components/Product/Details'
import Single from './components/Product/Single'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/product/:productId" element={<Details />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
