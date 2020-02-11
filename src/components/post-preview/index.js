import React from "react";

import "./styles.css";

import ReactLogo from "../../assets/react-logo.png";

const monthsPortuguese = {
  0: 'Janeiro',
  1: 'Fevereiro',
  2: 'Março',
  3: 'Abril',
  4: 'Maio',
  5: 'Junho',
  6: 'Julho',
  7: 'Agosto',
  8: 'Setembro',
  9: 'Outubro',
  10: 'Novembro',
  11: 'Dezembro',
}

const PostPreview = (props) => {
  
  function getTextFromElements(elements) {
    const paragraphs = elements.filter(element => element.element === 'paragraph');
    return paragraphs[0].content;
  }

  function formatDate(dateString) {
    const elementsOfDate = dateString.split('/');
    const day = elementsOfDate[0];
    const month = parseInt(elementsOfDate[1]);
    const year = elementsOfDate[2];

    return `${day} de ${monthsPortuguese[month]} de ${year}`;
  }

  const { post } = props;

  const { title, author, postDate } = post;
  const elements = props.post.elements || [];
  

  const text = getTextFromElements(elements);
  const dateFormated = formatDate(postDate);

  return (
    <article className="post-preview">
      <strong className="post-preview-title">
        {title}
      </strong>
      <p className="post-preview-author">
        Postado por <span>{author}</span>, em {dateFormated}
      </p>
      <div>
        <p className="post-preview-text">
          {text}
        </p>
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
