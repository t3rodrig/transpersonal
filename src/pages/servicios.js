import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServiciosPage = () => (
  <Layout>
    <SEO title="Servicios" />
    <section>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <StaticImage
              src="../images/476.jpg"
              className="d-block mx-lg-auto img-fluid border rounded-3 shadow-lg"
              alt=""
              loading="lazy"
              width={700}
              height={500}
              formats={["AUTO", "WEBP", "AVIF"]}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Calidez humana y profesionalismo.
            </h1>
            <p className="lead">
              Se atienden problemas de depresión, distimia, ansiedad, déficit de
              atención, problemas de conducta en adolescentes, conducta suicida,
              trastornos del sueño, trastornos de la alimentación, anorexia y
              bulimia.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                to="/contacto"
                role="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Agenda tu cita
              </Link>
            </div>
          </div>
        </div>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <i class="bi bi-award"></i>
            </div>
            <div>
              <h2>Valoración</h2>
              <p>
                Realizamos un historial clínico y psicoterapéutico para valorar
                la necesidad espiritual y duelos de manera totalmente
                personalizada.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <i class="bi bi-award"></i>
            </div>
            <div>
              <h2>Apoyo</h2>
              <p>
                Nuestra misión es lograr que superes situaciones difíciles con
                la finalidad de que logres desempeñarte en el ámbito laboral,
                familiar y social adecuadamente.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              <i class="bi bi-award"></i>
            </div>
            <div>
              <h2>Plenitud</h2>
              <p>
                Te ayudamos a encontrar la paz, tranquilidad, equilibrio y
                felicidad que necesitas para lograr una relación contigo mismo
                exitosa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ServiciosPage
