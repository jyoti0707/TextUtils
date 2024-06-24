import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About Us" />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Enter your text here : " />} />
      </Routes>
        </Router>
    </>
    
  );
}


export default App;
