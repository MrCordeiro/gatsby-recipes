import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <>
      <Layout>
        <main className="page">
          <section className="about-page">
            <article>
              <h2>Esse é o Livro de Receitas da Regina</h2>
              <p>
                Digitalizamos as receitas da mamãe e as disponibilizamos online,
                para a posteridade.
              </p>
              <p>
                Se você possui algum prato favorito, manda a receita para a
                gente.
              </p>
              <Link to="/contact" className="btn">
                Contacto
              </Link>
            </article>
            <StaticImage
              src="../assets/images/about.jpeg"
              alt="Pessoa colocando sal em uma tijela"
              className="about-img"
              placeholder="blurred"
            />
          </section>
        </main>
      </Layout>
    </>
  )
}

export default About
