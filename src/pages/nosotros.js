import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NosotrosPage = () => (
  <Layout>
    <SEO title="Nosotros" />
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold">Atención profesional en línea.</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Reciba atención médica especializada con una profesional con maestría
          en tanatología y psicoterapia transpersonal.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link
            to="/contacto"
            role="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Agenda tu cita
          </Link>
        </div>
      </div>
      <div className="overflow-hidden" style={{ "max-height": "30vh" }}>
        <div className="container px-5">
          <StaticImage
            src="../images/473.jpg"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            loading="lazy"
            width={700}
            height={500}
            formats={["AUTO", "WEBP", "AVIF"]}
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default NosotrosPage
