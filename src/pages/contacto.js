import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Form from "../components/form"

const ContactPage = () => (
  <Layout>
    <SEO title="Contacto" />
    <section id="contacto" className="bg-light">
      <div className="container px-4 py-5">
        <div className="text-center">
          <h1 className="display-4">Agenda tu cita</h1>
          <p>Deja tus datos y nosotros nos ponemos en contacto</p>
        </div>
        <div className="row mt-4">
          <div className="col-md-10 mx-auto">
            <Form />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
