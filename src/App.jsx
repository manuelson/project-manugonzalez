import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navar } from './components/Navar';
import { Router } from './components/Router';
import { Footer } from './components/Footer';

function App() {

  return (
      <>
          <Navar/>
          <Router/>
          <Footer/>
      </>
  )
}

export default App
