import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/Index.jsx';
import { Router } from './components/Router/Index.jsx';
import { Footer } from './components/Footer/Index.jsx';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

function App() {
    const [location, setLocation] = useState(useLocation())


  return (
      <>
          <NavBar/>
          <Router/>
          <Footer/>
      </>
  )
}

export default App
