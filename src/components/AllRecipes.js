import React from "react";
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        cookTime
        prepTime
        tags
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulRecipe.nodes;

  return(
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
