import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
    <Router>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
