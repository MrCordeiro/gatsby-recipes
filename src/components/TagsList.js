import React from "react";
import setupTags from "../utils/setupTags";
import { Link } from "gatsby";
import slugify from "slugify";

const TagsList = ({ recipes }) => {
  const tags = setupTags(recipes);

  return (
    <div className="tag-container">
      <h4>receitas</h4>
      <div className="tags-list">
        {tags.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })} 
      </div>
    </div>
  );
};

export default TagsList;
