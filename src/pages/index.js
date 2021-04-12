import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt eos
      accusamus repellendus, qui atque blanditiis numquam officiis est ducimus
      laborum fugit cum facilis quae. Harum adipisci incidunt recusandae culpa.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt eos
      accusamus repellendus, qui atque blanditiis numquam officiis est ducimus
      laborum fugit cum facilis quae. Harum adipisci incidunt recusandae culpa.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quibusdam
      consequatur ex voluptates facilis quasi tempora accusantium a qui animi.
      Accusantium ratione ullam a sint enim ipsam quae dolorem quis! Magnam
      eaque natus impedit aliquam, maxime recusandae, aliquid omnis tenetur a ad
      distinctio aspernatur vitae, inventore laborum. Aliquam mollitia fugiat
      maiores dolore eaque. Delectus atque iste quam sunt, harum pariatur?
      Corporis ad enim error debitis doloremque quo exercitationem beatae ipsum,
      vel sunt cum qui perspiciatis magnam consequuntur et laudantium itaque!
      Distinctio alias, consequatur commodi totam aperiam hic dolor eligendi
      cupiditate. Porro commodi nulla nobis debitis excepturi consequuntur
      velit. Eum mollitia obcaecati expedita ab beatae molestiae aspernatur,
      odit, accusantium commodi, ratione harum excepturi? Vel temporibus qui
      necessitatibus fuga impedit, adipisci voluptate. Laudantium tenetur
      blanditiis dolor corporis et, natus praesentium aut iusto eligendi
      necessitatibus quos nostrum quia excepturi iure voluptas asperiores minus
      magnam, impedit incidunt reiciendis magni ullam? Repudiandae adipisci
      officia tempora?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sunt eos
      accusamus repellendus, qui atque blanditiis numquam officiis est ducimus
      laborum fugit cum facilis quae. Harum adipisci incidunt recusandae culpa.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, blanditiis
      illum. Tenetur, expedita repellat? Minus dolores dignissimos, sequi
      suscipit eius sint dolore provident quam reprehenderit dolorem molestiae
      asperiores, voluptatem adipisci? Nam, laudantium. Similique modi quos
      laudantium repudiandae cupiditate nostrum eos vero tempore! Repellendus
      velit vel tempora fuga, reprehenderit consequatur, ab nisi incidunt
      molestiae, mollitia consequuntur ducimus minus ullam. Quibusdam, dicta! Ut
      voluptate quod quis quia dicta fuga, nesciunt aperiam non nemo?
      Consequuntur explicabo expedita maiores odit quasi recusandae aspernatur?
      Sequi consectetur nam optio earum culpa repellat aut sit quae quaerat!
      Voluptatum deleniti eum accusamus sit, odit alias vitae! Ad recusandae,
      labore dolore tempore corrupti quis fugit repellendus beatae vel possimus
      sunt sequi, est quidem quibusdam id inventore aperiam nostrum odio. Velit
      provident minus dignissimos impedit sequi alias, earum facere commodi
      tenetur doloribus odit, quas cumque expedita veniam, iure fugit cum
      quibusdam quod ipsum rerum nemo! Accusamus fugiat dignissimos odit
      voluptatibus.
    </p>
  </Layout>
)

export default IndexPage
