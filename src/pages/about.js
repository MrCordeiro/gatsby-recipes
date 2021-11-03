import React from "react";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import { Link, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/Seo";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <Seo title="Sobre" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Esse é o Livro de Receitas da Regina</h2>
            <p>
              Digitalizamos as receitas da mamãe e as disponibilizamos online,
              para a posteridade.
            </p>
            <p>
              Se você possui algum prato favorito, manda a receita para a gente.
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
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        id
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default About;
