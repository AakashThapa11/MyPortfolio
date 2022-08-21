import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
