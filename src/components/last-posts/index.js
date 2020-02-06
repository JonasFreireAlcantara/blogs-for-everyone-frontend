import React from "react";

import "./styles.css";

const lastPostsData = [
  "Cofundadores do Google deixam comando da empresa",
  "Entenda o que significa o Google ter atingido a supremacia quântica"
];

const LastPosts = () => {
  return (
    <aside id="last-posts">
      <div id="last-posts-contents">
        <strong>Últimos Eventos</strong>

        {lastPostsData.map(post => (
          <p key={post}>{post}</p>
        ))}
      </div>

      <div id="last-posts-vertical-line"></div>
    </aside>
  );
};

export default LastPosts;
