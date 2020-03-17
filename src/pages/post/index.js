import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';

import { formatDate } from '../../lib/date';
import api from '../../services/api';

import './styles.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import BlogConfiguration from '../../config/BlogConfiguration';

class Post extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const { postId } = this.props.match.params;

    const post = (await api.get(`/posts/${postId}`)).data;

    global.document.title = post.title || BlogConfiguration.title;

    this.setState({ post });
  }

  static renderElement(element, index) {
    return {
      paragraph: (
        <p className='post-content-paragraph' key={index}>
          {element.content}
        </p>
      ),
      code: (
        <div className='post-content-code' key={index}>
          <kbd>{element.content}</kbd>
        </div>
      ),
      imageCenter: (
        <img
          className='post-content-image-center'
          key={index}
          alt={element.content}
          src={element.content}
        />
      )
    }[element.element];
  }

  render() {
    const { post = {} } = this.state;

    const { title = '', author = '', postDate = '' } = post;
    const { elements = [] } = post;

    const dateFormated = formatDate(postDate);

    const disqusShortname = process.env.REACT_APP_DISQUS_SHORTNAME;
    const disqusConfig = {
      url: process.env.REACT_APP_BLOG_FRONTEND_DOMAIN + this.props.match.url,
      identifier: post._id,
      title
    };

    return (
      <div id='post'>
        <Header />

        <main>
          <article className='post-content'>
            {this.state.post && (
              <>
                <h1>{title}</h1>
                <h2>
                  Postado por <span>{author}</span>, em {dateFormated}
                </h2>

                {/* <div className='post-content-main-image'>
                  <img src={ReactLogo} alt={title} />
                </div> */}

                {elements.map((element, index) =>
                  Post.renderElement(element, index)
                )}

                <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </>
            )}
          </article>
        </main>

        <Footer />
      </div>
    );
  }
}

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string
    })
  }).isRequired
};

export default Post;
