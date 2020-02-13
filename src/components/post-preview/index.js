import React from "react";
import { Link } from "react-router-dom";

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
      <Link className="post-preview-title" to={`/post/${post._id}`}>
        {title}
      </Link>
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
