import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Router } from './components/Router';
import { Footer } from './components/Footer';

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
