import React, { Component } from "react";

import { formatDate } from "../../lib/date";
import api from "../../services/api";

import "./styles.css";

import Header from "../../components/header";
import Footer from "../../components/footer";

import ReactLogo from "../../assets/react-logo.png";

class Post extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { postId } = this.props.match.params;
    // console.log(postId);

    const post = (await api.get(`/posts/${postId}`)).data;
    // console.log(post);

    this.setState({ post });
  }

  renderElement(element, index) {
    return {
      paragraph: (
        <p className="post-content-paragraph" key={index}>
          {element.content}
        </p>
      ),
      code: (
        <div className="post-content-code" key={index}>
          <kbd>{element.content}</kbd>
        </div>
      ),
      imageCenter: (
        <img
          className="post-content-image-center"
          key={index}
          alt={element.content}
          src={element.content}
        />
      )
    }[element.element];
  }

  render() {
    const { post = {} } = this.state;

    const { title = "", author = "", postDate = "" } = post;
    const { elements = [] } = post;

    const dateFormated = formatDate(postDate);

    // console.log(elements);

    return (
      <div id="post">
        <Header />

        <main>
          <article className="post-content">
            <h1>{title}</h1>
            <h2>
              Postado por <span>{author}</span>, em {dateFormated}
            </h2>

            <div className="post-content-main-image">
              <img src={ReactLogo} alt={title} />
            </div>

            {elements.map((element, index) =>
              this.renderElement(element, index)
            )}
          </article>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Post;
