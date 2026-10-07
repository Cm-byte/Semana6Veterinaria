import { useEffect, useState } from "react";
import axios from "axios";

import {
  PawPrint,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  AlertCircle,
  Dog,
} from "lucide-react";

import { getMascotas } from "../services/api";

function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const cargarMascotas = async () => {
      try {
        setLoading(true);
        setError(null);

        const mascotas = await getMascotas(
          controller.signal
        );

        setData(mascotas);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(
            "No se pudieron cargar las mascotas."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    cargarMascotas();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="page">

      <section className="page-header">

        <div>

          <span className="page-tag">
            <PawPrint size={16} />
            REGISTRO DE MASCOTAS
          </span>

          <h2>
            Mascotas registradas
          </h2>

          <p>
            Consulta los registros disponibles
            en nuestra veterinaria.
          </p>

        </div>

        <div className="total-card">

          <span>Total</span>

          <strong>{data.length}</strong>

          <small>registros</small>

        </div>

      </section>


      {loading && (
        <div className="status-card">

          <div className="loader"></div>

          <h3>
            Cargando mascotas...
          </h3>

          <p>
            Estamos obteniendo la información.
          </p>

        </div>
      )}


      {error && (
        <div className="status-card error">

          <div className="status-icon">
            <AlertCircle size={42} />
          </div>

          <h3>
            Ocurrió un problema
          </h3>

          <p>{error}</p>

        </div>
      )}


      {!loading && !error && (
        <>
          {data.length > 0 ? (

            <div className="pet-grid">

              {data.map((mascota) => (

                <article
                  className="pet-card"
                  key={mascota.id}
                >

                  <div className="pet-card-top">

                    <div className="pet-avatar">
                      <Dog size={28} />
                    </div>

                    <span className="pet-number">
                      #{String(mascota.id).padStart(2, "0")}
                    </span>

                  </div>


                  <div className="pet-info">

                    <h3>{mascota.name}</h3>


                    <div className="info-row">
                      <Mail size={17} />
                      <p>{mascota.email}</p>
                    </div>


                    <div className="info-row">
                      <MapPin size={17} />
                      <p>{mascota.address.city}</p>
                    </div>


                    <div className="info-row">
                      <Phone size={17} />
                      <p>{mascota.phone}</p>
                    </div>

                  </div>


                  <div className="pet-footer">

                    <CheckCircle size={16} />

                    <span>
                      Registro activo
                    </span>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="status-card">

              <div className="status-icon">
                <PawPrint size={42} />
              </div>

              <h3>
                No existen mascotas registradas
              </h3>

              <p>
                Aún no hay registros disponibles.
              </p>

            </div>

          )}
        </>
      )}

    </div>
  );
}

export default List;

