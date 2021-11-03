import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setupTags from "../utils/setupTags";
import Seo from "../components/Seo";

const Tags = ({ data }) => {
  const tags = setupTags(data.allContentfulRecipe.nodes);
  return (
    <>
      <Layout>
        <Seo title="Tags" />
        <main className="page">
          <section className="tags-page">
            {tags.map((tag, index) => {
              const [text, value] = tag;
              return (
                <Link to={`/tags/${text}`} key={index} className="tag">
                  <h5>{text}</h5>
                  <p>{value} receitas</p>
                </Link>
              );
            })}
          </section>
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        tags
      }
    }
  }
`;

export default Tags;
