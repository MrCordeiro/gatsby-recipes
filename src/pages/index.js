import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <>
      <Layout>
        <main className="page">
          <header className="hero">
            <StaticImage
              src="../assets/images/main.jpeg"
              alt="eggs"
              className="hero-img"
              placeholder="tracedSVG"
              layout="fullWidth"
            />
            <div className="hero-container">
              <div className="hero-text">
                <h1>reginadas</h1>
                <h4>suas receitas, com um toque da mamãe</h4>
              </div>
            </div>
          </header>
          <AllRecipes/>
        </main>
      </Layout>
    </>
  )
}
