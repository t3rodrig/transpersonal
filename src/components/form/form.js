import * as React from "react"

const Form = () => (
  <form
    action="https://formspree.io/f/xqkwkovb"
    method="POST"
    name="agendar-cita"
    className="needs-validation"
    novalidate
  >
    <div className="row g-3">
      <div className="col-sm-6">
        <label htmlFor="firstName" className="form-label">
          Nombre(s)
        </label>
        <input
          name="nombres"
          type="text"
          className="form-control"
          id="firstName"
          required
        />
        <div className="invalid-feedback">Se requiere un nombre válido.</div>
      </div>
      <div className="col-sm-6">
        <label htmlFor="lastName" className="form-label">
          Apellido(s)
        </label>
        <input
          name="apellidos"
          type="text"
          className="form-control"
          id="lastName"
          required
        />
        <div className="invalid-feedback">Se requiere un apellido válido.</div>
      </div>
      <div className="col-sm-6">
        <label htmlFor="phone" className="form-label">
          Teléfono Celular
        </label>
        <input
          name="telefono"
          type="tel"
          className="form-control"
          id="phone"
          placeholder="55 1234 1234"
          required
        />
        <div className="invalid-feedback">
          Por favor, introduce un número de teléfono válido.
        </div>
      </div>
      <div className="col-sm-6">
        <label htmlFor="email" className="form-label">
          Email <span className="text-muted">(Opcional)</span>
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          placeholder="you@example.com"
        />
        <div className="invalid-feedback">
          Por favor, introduce una dirección de correo electrónico válida.
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="comments" className="form-label">
          ¿Cómo podemos ayudarte? <span className="text-muted">(Opcional)</span>
        </label>
        <textarea
          name="mensaje"
          className="form-control"
          id="comments"
          placeholder="Mensaje"
          rows="5"
        ></textarea>
      </div>
      <div className="col-sm-6">
        <label htmlFor="date-first" className="form-label">
          Primera opción de fecha
        </label>
        <input
          name="fecha-cita"
          type="date"
          className="form-control"
          id="date-first"
          required
        />
        <div className="invalid-feedback">
          Por favor, introduce una fecha válido.
        </div>
      </div>
      <div className="col-sm-6">
        <label htmlFor="date-second" className="form-label">
          Segunda opción de fecha
        </label>
        <input
          name="fecha-cita"
          type="date"
          className="form-control"
          id="date-second"
          required
        />
        <div className="invalid-feedback">
          Por favor, introduce una fecha válido.
        </div>
      </div>
    </div>
    <br />
    <p>
      <span className="text-muted">
        Las fechas de consulta son sugeridas. Nos comunicaremos contigo para
        confirmar la disponibilidad.
      </span>
    </p>
    <div className="text-center">
      <button className="btn btn-primary btn-lg my-2" type="submit">
        Enviar
      </button>
    </div>
  </form>
)

export default Form
