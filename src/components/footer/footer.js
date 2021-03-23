import * as React from "react"

const Footer = () => (
  <footer
    className="footer p-3 p-md-5 mt-auto"
    style={{ backgroundColor: "#50183e" }}
  >
    <div className="container text-white">
      <p className="text-center">
        © {new Date().getFullYear()} por MI DESPERTAR. Desarrollado por{" "}
        {/* <a href="https://twitter.com/t3rodrig" style={{ color: "#495057" }}> */}
        @t3rodrig
        {/* </a> */}
      </p>
    </div>
  </footer>
)

export default Footer
