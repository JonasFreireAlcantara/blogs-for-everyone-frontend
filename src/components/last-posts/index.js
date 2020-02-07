import React from "react";

import "./styles.css";

const lastPostsData = [
  "Cofundadores do Google deixam comando da empresa",
  "Entenda o que significa o Google ter atingido a supremacia quântica",
  "Cofundadores do Google deixam comando da empresa",
  "Entenda o que significa o Google ter atingido a supremacia quântica",
  "Cofundadores do Google deixam comando da empresa",
  "Entenda o que significa o Google ter atingido a supremacia quântica",
  "Cofundadores do Google deixam comando da empresa",
  "Entenda o que significa o Google ter atingido a supremacia quântica"
];

const NUMBER_OF_POSTS = 4;

const LastPosts = () => {
  const firstFourLastPostsData = lastPostsData.slice(0, NUMBER_OF_POSTS);

  return (
    <aside id="last-posts">
      <div id="last-posts-contents">
        <strong>Últimas Postagens:</strong>

        {firstFourLastPostsData.map(post => (
          <p key={post}>{post}</p>
        ))}
      </div>

      <div id="last-posts-vertical-line"></div>
    </aside>
  );
};

export default LastPosts;
