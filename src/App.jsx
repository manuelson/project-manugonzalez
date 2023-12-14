import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/Index.jsx';
import { Router } from './components/Router/Index.jsx';
import { Footer } from './components/Footer/Index.jsx';
import { Supabase } from './service/Supabase.jsx';

function App() {
  return (
      <>
          <NavBar/>
          <Router/>
          <Footer/>
          <Supabase/>
      </>
  )
}

export default App
