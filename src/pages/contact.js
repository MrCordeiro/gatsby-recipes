import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import Seo from "../components/Seo";

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <>
      <Layout>
        <Seo title="Contato" />
        <main className="page">
          <section className="contact-page">
            <article className="contact-info">
              <h3>Quer falar conosco?</h3>
              <p>
                Você está com dúvidas em relação a alguma receita? Tem ideias
                para partilhar?
              </p>
              <p>Então nos envie uma mensagem!</p>
              <p>Lemos todos os emails com muito carinho e atenção!</p>
            </article>
            <article>
              <form
                className="form contact-form"
                action="https://formspree.io/f/xrgrwkdw"
                method="POST"
              >
                <div className="form-row">
                  <label htmlFor="name">seu nome</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="form-row">
                  <label htmlFor="email" name="_replyto">
                    seu email
                  </label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="form-row">
                  <label htmlFor="message">messagem</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <button type="submit" className="btn btn-block">
                  enviar
                </button>
              </form>
            </article>
          </section>
          <section className="featured-recipes">
            <h5>Olha que gororoba mais linda!</h5>
            <RecipesList recipes={recipes} />
          </section>
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Contact;
