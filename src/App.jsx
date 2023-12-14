import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/Index.jsx';
import { Router } from './components/Router/Index.jsx';
import { Footer } from './components/Footer/Index.jsx';

function App() {

  return (
      <>
          <NavBar/>
          <Router/>
          <Footer/>
      </>
  )
}

export default App
