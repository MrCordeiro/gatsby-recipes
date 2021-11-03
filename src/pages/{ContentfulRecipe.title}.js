import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import slugify from "slugify";

const options = {
  renderNode: {
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <div className="single-instruction">
        <header>
          <p class="step">passo </p>
          <div></div>
        </header>
        {children}
      </div>
    ),
  },
};

const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    tags,
    instructions,
    ingredients,
    tools,
    prepTime,
    servings,
    description: { description },
    image,
  } = data.contentfulRecipe;
  const pathToImage = getImage(image);

  return (
    <Layout>
      <Seo title={title} description={description} />
      <main className="page">
        <div className="recipe-page">
          {/* hero */}
          <section className="recipe-hero">
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="about-img"
            />
            <article className="recipe-info">
              <h2>{title}</h2>
              <p>{description}</p>
              {/* icons */}
              <div className="recipe-icons">
                <article>
                  <BsClock />
                  <h5>preparação</h5>
                  <p>{prepTime}</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cozimento</h5>
                  <p>{cookTime}</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>porções</h5>
                  <p>{servings}</p>
                </article>
              </div>
              {/* tags */}
              <p className="recipe-tags">
                Tags:
                {tags.map((tag, index) => {
                  const slug = slugify(tag, { lower: true });
                  return (
                    <Link key={index} to={`/tags/${slug}`}>
                      {tag}
                    </Link>
                  );
                })}
              </p>
            </article>
          </section>
          {/* instructions and ingredients */}
          <section className="recipe-content">
            <article>
              <h4>instruções</h4>
              {renderRichText(instructions, options)}
            </article>
            <article className="second-column">
              <div>
                <h4>ingredientes</h4>
                {ingredients.map((item, index) => {
                  return (
                    <p key={index} className="single-ingredient">
                      {item}
                    </p>
                  );
                })}
              </div>
              <div>
                <h4>equipamentos</h4>
                {tools.map((item, index) => {
                  return (
                    <p key={index} className="single-tool">
                      {item}
                    </p>
                  );
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      title
      cookTime
      tags
      ingredients
      instructions {
        raw
      }
      tools
      description {
        description
      }
      prepTime
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

export default RecipeTemplate;
