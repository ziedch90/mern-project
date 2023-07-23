import logo from './logo.svg';
import './App.css';
import Listearticles from './components/articles/Listearticles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavScroll from './components/NavScroll';

function App() {
  return (
    <div className="App">
    <Router>
      <NavScroll/>
      <Routes>
      <Route path='/articles' element={<Listearticles/>}/>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
