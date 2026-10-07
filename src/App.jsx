import { NavLink, Routes, Route } from "react-router-dom";
import {
  PawPrint,
  House,
  Dog,
  Plus,
} from "lucide-react";

import Home from "./pages/Home";
import List from "./pages/List";
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">

      <header className="header">
        <div className="header-container">

          <div className="logo">
            <div className="logo-icon">
              <PawPrint size={28} />
            </div>

            <div>
              <h1>Patitas</h1>
              <span>Veterinaria</span>
            </div>
          </div>

          <nav className="nav">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <House size={18} />
              Inicio
            </NavLink>

            <NavLink
              to="/mascotas"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Dog size={18} />
              Mascotas
            </NavLink>

            <NavLink
              to="/registrar"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <Plus size={18} />
              Registrar
            </NavLink>

          </nav>

        </div>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mascotas" element={<List />} />
          <Route path="/registrar" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <strong>
            <PawPrint size={18} />
            Veterinaria Patitas
          </strong>

          <p>
            Cuidamos a quienes llenan tu vida de amor.
          </p>
        </div>

        <span>© 2026 Patitas</span>
      </footer>

    </div>
  );
}

export default App;

