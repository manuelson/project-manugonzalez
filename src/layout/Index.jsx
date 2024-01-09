import { Outlet } from "react-router-dom";
import { NavBar } from "src/components/NavBar.jsx";
import { Footer } from "src/components/Footer.jsx";
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