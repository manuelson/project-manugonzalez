import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/Index.jsx";
import { Footer } from "../components/Footer/Index.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Layout() {

  return (
      <>
          <NavBar />
          <main className="mt-5">
              <Outlet />
          </main>
          <Footer />
      </>
  )
}