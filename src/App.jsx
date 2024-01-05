import 'bootstrap/dist/css/bootstrap.min.css'
import {RouterProvider} from "react-router-dom"
import {Router} from "./components/Router/Index.jsx"
import 'animate.css';
import {Footer} from "./components/Footer/Index.jsx";
import {Skills} from "./components/Skills/Index.jsx";
import {Banner} from "./components/Banner/Index.jsx";
import {NavBar} from "./components/NavBar/Index.jsx";

function App() {

    return (
      <>
          <NavBar />
          <main className="mt-5">
              <Banner />
              <section id="pages" className="container mt-5">
                  <h2 className="h6">
                      Pages
                  </h2>
                  <hr />
                  <div className="d-md-flex nav-cards gap-4 ">
                      <a target="_self" className="p-4 rounded-3 animate__animated  animate__fadeInUp" href="/blog">
                          <h3 className="h6">Blog</h3>
                          <p className="">Read what I share</p>
                      </a>
                      <a target="_self"  className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-1" href="/portfolio">
                          <h3 className="h6">Portfolio</h3>
                          <p>
                              Projects, experiences knowledge
                          </p>
                      </a>
                  </div>
                  <div className="d-md-flex nav-cards gap-4 mt-4">
                      <a target="_self" className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-2" href="/blog">
                          <h3 className="h6">About</h3>
                          <p className="">Read more about me</p>
                      </a>
                      <a target="_self"  className="p-4 rounded-3 animate__animated  animate__fadeInUp card-delay-3" href="/portfolio">
                          <h3 className="h6">Let's talk</h3>
                          <p>
                              Any questions?
                          </p>
                      </a>
                  </div>
              </section>
              <Skills />
          </main>
          <Footer />
      </>
  )
}

export default App
