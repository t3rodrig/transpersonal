import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <section>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <StaticImage
              src="../images/410.jpg"
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
              Mi despertar al encontrarme a mí misma(o)
            </h1>
            <p className="lead">
              ¿Necesitas psicoterapia? Acudir a un{" "}
              <strong>psicoterapeuta transpersonal</strong> te ayudará a sanar
              tus heridas emocionales y a conocerte mejor, con la finalidad de
              lograr estar sereno y saber afrontar situaciones de crisis con una
              actitud objetiva y consiente. Recuerda que asistir con un
              profesional puede evitar <strong>enfermedades crónicas</strong> en
              el futuro.
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
      </div>
    </section>
  </Layout>
)

export default IndexPage
