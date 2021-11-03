const path = require("path");
const slugify = require("slugify");


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          tags
        }
      }
    }
  `);

  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true });
      // Create a page for each tag it finds
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
};
