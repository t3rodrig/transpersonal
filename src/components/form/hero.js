import * as React from "react"

import calendar from "../../images/calendar.jpeg"

const Hero = () => (
  <div className="px-4 pt-5 my-5 text-center border-bottom">
    <h1 className="display-4 fw-bold">¡GRACIAS!</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">
        Nos pondremos en contacto contigo para coordinar los detalles de tu
        cita.
      </p>
    </div>
    <div className="overflow-hidden" style={{ maxHeight: "40vh" }}>
      <div className="container px-5">
        <img
          src={calendar}
          className="img-fluid border rounded-3 shadow-lg mb-4"
          alt="A calendar. By Debby Hudson <https://unsplash.com/photos/TqKFiMR9O6s>"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
    </div>
  </div>
)

export default Hero
