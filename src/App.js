import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from "./components/Header";

function App() {
  return (
    <div className='m-0 p-0 text-white font-sans' >
    <Router>
      <Header/>
      <Routes>
       <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
