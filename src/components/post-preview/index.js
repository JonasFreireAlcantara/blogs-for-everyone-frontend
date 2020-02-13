import React from "react";

import { formatDate } from "../../lib/date";

import "./styles.css";

import ReactLogo from "../../assets/react-logo.png";

const PostPreview = props => {
  function getTextFromElements(elements) {
    const paragraphs = elements.filter(
      element => element.element === "paragraph"
    );
    return paragraphs[0].content;
  }

  const { post } = props;

  const { title, author, postDate } = post;
  const elements = props.post.elements || [];

  const text = getTextFromElements(elements);
  const dateFormated = formatDate(postDate);

  return (
    <article className="post-preview">
      <strong className="post-preview-title">{title}</strong>
      <p className="post-preview-author">
        Postado por <span>{author}</span>, em {dateFormated}
      </p>
      <div>
        <p className="post-preview-text">{text}</p>
        <img
          className="post-preview-image"
          src={ReactLogo}
          alt="Título do Post"
        />
      </div>
    </article>
  );
};

export default PostPreview;
