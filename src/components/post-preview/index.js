import React from "react";

import "./styles.css";

import ReactLogo from "../../assets/react-logo.png";

const PostPreview = () => {
  return (
    <article className="post-preview">
      <strong className="post-preview-title">
        Título do Post - Que post mais legal hein ?
      </strong>
      <p className="post-preview-author">
        Postado por <span>Jonas Freire</span>, em 03 de Janeiro de 2020
      </p>

      <div>
        <p className="post-preview-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam
          velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate
          commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed
          eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam
          nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet
          quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu
          diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis
          sodales nec vulputate justo hendrerit. Vivamus varius pretium ligula,
          a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci
          ullamcorper at ultricies metus viverra. Pellentesque arcu mauris,
          malesuada quis ornare accumsan, blandit sed diam.
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
