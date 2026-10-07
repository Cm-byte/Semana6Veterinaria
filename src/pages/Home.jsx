import { Link } from "react-router-dom";
import {
  PawPrint,
  Heart,
  Stethoscope,
  Syringe,
  ShieldCheck,
  Dog,
  Plus,
} from "lucide-react";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            <PawPrint size={17} />
            Cuidamos a tus mejores amigos
          </span>

          <h2>
            Bienvenido a
            <span> Veterinaria Patitas</span>
          </h2>

          <p>
            Brindamos atención veterinaria con cariño, dedicación
            y compromiso para que tus mascotas tengan una vida
            saludable y feliz.
          </p>

          <div className="hero-buttons">

            <Link to="/mascotas" className="btn btn-primary">
              <Dog size={19} />
              Ver mascotas
            </Link>

            <Link to="/registrar" className="btn btn-secondary">
              <Plus size={19} />
              Registrar mascota
            </Link>

          </div>

        </div>

        <div className="hero-image">

          <div className="pet-circle">
            <PawPrint size={95} strokeWidth={1.5} />
          </div>

          <div className="floating-card card-one">
            <Heart size={17} />
            Amor
          </div>

          <div className="floating-card card-two">
            <Stethoscope size={17} />
            Salud
          </div>

          <div className="floating-card card-three">
            <PawPrint size={17} />
            Cuidado
          </div>

        </div>

      </section>


      <section className="services">

        <div className="section-title">
          <span>Nuestros servicios</span>

          <h3>
            Todo para el bienestar de tu mascota
          </h3>
        </div>


        <div className="service-grid">

          <article className="service-card">

            <div className="service-icon">
              <Stethoscope size={28} />
            </div>

            <h4>Consulta veterinaria</h4>

            <p>
              Atención profesional para cuidar la salud
              de tu mascota.
            </p>

          </article>


          <article className="service-card">

            <div className="service-icon">
              <Syringe size={28} />
            </div>

            <h4>Vacunación</h4>

            <p>
              Protege a tu compañero con sus vacunas
              y controles.
            </p>

          </article>


          <article className="service-card">

            <div className="service-icon">
              <ShieldCheck size={28} />
            </div>

            <h4>Cuidado integral</h4>

            <p>
              Seguimiento y atención para una vida
              saludable y feliz.
            </p>

          </article>

        </div>

      </section>

    </div>
  );
}

export default Home;
