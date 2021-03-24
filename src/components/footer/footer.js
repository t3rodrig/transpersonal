import * as React from "react"
import "./footer.css"

const Footer = () => (
  <footer className="p-3 p-md-5 mt-auto">
    <div className="container text-white">
      <div className="row">
        <div className="col-md-auto">One of two columns</div>
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
                class="link-light text-decoration-none"
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
