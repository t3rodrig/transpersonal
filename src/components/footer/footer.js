import * as React from "react"
import "./footer.css"

const Footer = () => (
  <footer className="pt-5 pb-2 mt-auto">
    <div className="container text-white">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d726.3308337844546!2d-99.08138560433547!3d19.299259502966965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce03476e4946ff%3A0xa1298d1be2d9fc13!2sUnidad%20Habitacional%20Plenitud!5e0!3m2!1ses-419!2smx!4v1616620630679!5m2!1ses-419!2smx"
                width="160"
                height="160"
                allowFullScreen={true}
                title="map"
              ></iframe>
            </div>
            <div className="col-12 col-md-5 col-xl-4">
              <p>
                Décima Cda. Jose Clemente Orozco 21, Valle de San Lorenzo,
                Iztapalapa, 09970 Ciudad de México, CDMX
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-auto ms-auto">
          <h5>Contáctanos</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a
                href="tel:5511973392"
                aria-label="Enlace a la aplicación para móvil"
                className="link-light text-decoration-none"
              >
                <i className="bi bi-telephone"></i> 55-1197-3392
              </a>
            </li>
            <li>
              <a
                href="mailto:lu6014@yahoo.com.mx"
                aria-label="Enlace a correo electrónico "
                className="link-light text-decoration-none"
              >
                <i className="bi bi-envelope"></i> lu6014@yahoo.com.mx
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="text-center">
            © {new Date().getFullYear()} por Mi Despertar. Desarrollado por{" "}
            @t3rodrig
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
