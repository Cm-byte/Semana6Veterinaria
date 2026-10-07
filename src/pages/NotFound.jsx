import { Link } from "react-router-dom";
import {
  PawPrint,
  House,
} from "lucide-react";

function NotFound() {
  return (
    <div className="not-found">

      <div className="not-found-icon">
        <PawPrint size={65} />
      </div>

      <span>ERROR 404</span>

      <h2>
        ¡Ups! Esta página se perdió
      </h2>

      <p>
        Parece que esta página salió a dar un paseo.
        <br />
        Pero no te preocupes, podemos volver a casa.
      </p>

      <Link to="/" className="btn btn-primary">
        <House size={19} />
        Volver al inicio
      </Link>

    </div>
  );
}

export default NotFound;
