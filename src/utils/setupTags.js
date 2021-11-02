const setupTags = recipes => {
  const allTags = {};

  // Count tags
  recipes.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] += 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  // Sort alphabetically
  const sortedTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag);
  });

  return sortedTags;
};

export default setupTags;
