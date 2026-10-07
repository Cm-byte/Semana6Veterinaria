import { useState } from "react";

import {
  PawPrint,
  User,
  Dog,
  Camera,
  CheckCircle,
  FileText,
  ArrowRight,
} from "lucide-react";

function Form() {

  const [formulario, setFormulario] = useState({
    mascota: "",
    propietario: "",
    especie: "",
  });

  const [imagen, setImagen] = useState(null);
  const [vistaPrevia, setVistaPrevia] = useState("");
  const [mensaje, setMensaje] = useState("");


  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });

    setMensaje("");
  };


  const handleImagen = (event) => {

    const archivo = event.target.files[0];

    if (!archivo) return;

    setImagen(archivo);

    const url = URL.createObjectURL(archivo);

    setVistaPrevia(url);

    setMensaje(
      "Imagen seleccionada correctamente."
    );
  };


  const handleSubmit = (event) => {

    event.preventDefault();

    if (
      !formulario.mascota ||
      !formulario.propietario ||
      !formulario.especie
    ) {

      setMensaje(
        "Completa todos los campos para continuar."
      );

      return;
    }


    if (!imagen) {

      setMensaje(
        "Selecciona una imagen de la mascota para continuar."
      );

      return;
    }


    setMensaje(
      `¡${formulario.mascota} fue registrada correctamente! La imagen se subió correctamente.`
    );


    setFormulario({
      mascota: "",
      propietario: "",
      especie: "",
    });

    setImagen(null);
    setVistaPrevia("");
  };


  return (

    <div className="page form-page">

      <div className="form-wrapper">


        <div className="form-intro">

          <span className="page-tag">
            <PawPrint size={16} />
            NUEVO REGISTRO
          </span>


          <h2>
            Registrar mascota
          </h2>


          <p>
            Completa los datos de tu mascota para
            agregarla al registro de Veterinaria Patitas.
          </p>


          <div className="form-decoration">

            <div>
              <Dog size={35} />
            </div>

            <div>
              <PawPrint size={35} />
            </div>

            <div>
              <Dog size={35} />
            </div>

          </div>

        </div>


        <div className="form-card">


          <div className="form-card-header">

            <div className="form-icon">
              <FileText size={25} />
            </div>

            <div>

              <h3>
                Datos de la mascota
              </h3>

              <p>
                Ingresa la información solicitada
              </p>

            </div>

          </div>


          <form onSubmit={handleSubmit}>


            <div className="input-group">

              <label htmlFor="mascota">
                Nombre de la mascota
              </label>

              <div className="input-wrapper">

                <PawPrint size={18} />

                <input
                  id="mascota"
                  name="mascota"
                  type="text"
                  value={formulario.mascota}
                  onChange={handleChange}
                  placeholder="Ej. Firulais"
                />

              </div>

            </div>


            <div className="input-group">

              <label htmlFor="propietario">
                Nombre del propietario
              </label>

              <div className="input-wrapper">

                <User size={18} />

                <input
                  id="propietario"
                  name="propietario"
                  type="text"
                  value={formulario.propietario}
                  onChange={handleChange}
                  placeholder="Ej. Juan Pérez"
                />

              </div>

            </div>


            <div className="input-group">

              <label htmlFor="especie">
                Especie
              </label>

              <div className="input-wrapper">

                <Dog size={18} />

                <select
                  id="especie"
                  name="especie"
                  value={formulario.especie}
                  onChange={handleChange}
                >

                  <option value="">
                    Selecciona una especie
                  </option>

                  <option value="Perro">
                    Perro
                  </option>

                  <option value="Gato">
                    Gato
                  </option>

                  <option value="Ave">
                    Ave
                  </option>

                  <option value="Conejo">
                    Conejo
                  </option>

                  <option value="Otro">
                    Otro
                  </option>

                </select>

              </div>

            </div>


            {/* SUBIR IMAGEN */}

            <div className="input-group">

              <label htmlFor="imagen">
                Foto de la mascota
              </label>

              <div className="upload-box">

                <input
                  id="imagen"
                  type="file"
                  accept="image/*"
                  onChange={handleImagen}
                />


                <label
                  htmlFor="imagen"
                  className="upload-label"
                >

                  <Camera
                    className="upload-icon"
                    size={34}
                  />

                  <strong>
                    {imagen
                      ? "Cambiar imagen"
                      : "Seleccionar imagen"}
                  </strong>

                  <small>
                    JPG, PNG o WEBP
                  </small>

                </label>

              </div>

            </div>


            {/* VISTA PREVIA */}

            {vistaPrevia && (

              <div className="image-preview">

                <img
                  src={vistaPrevia}
                  alt="Vista previa de la mascota"
                />

                <div>

                  <strong>
                    <CheckCircle size={16} />
                    Imagen seleccionada
                  </strong>

                  <p>
                    {imagen.name}
                  </p>

                </div>

              </div>

            )}


            <button
              type="submit"
              className="submit-btn"
            >

              Registrar mascota

              <ArrowRight size={19} />

            </button>

          </form>


          {mensaje && (

            <div
              className={
                mensaje.includes("correctamente")
                  ? "form-message success"
                  : "form-message warning"
              }
            >

              {mensaje}

            </div>

          )}

        </div>

      </div>

    </div>

  );
}

export default Form;

