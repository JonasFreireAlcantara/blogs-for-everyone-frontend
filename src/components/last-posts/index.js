import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

const NUMBER_OF_POSTS = 4;

class LastPosts extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    const posts = await api.get('/posts');
    this.setState({ posts: posts.data });
  }

  render() {
    const posts = this.state.posts || [];

    const firstFourLastPostsData = posts.slice(0, NUMBER_OF_POSTS);

    return (
      <aside id='last-posts'>
        <div id='last-posts-contents'>
          <strong>Últimas Postagens:</strong>

          {firstFourLastPostsData.map(post => (
            <Link
              className='last-posts-links'
              key={post._id}
              to={`/post/${post._id}`}
            >
              {post.title}
            </Link>
          ))}
        </div>
      </aside>
    );
  }
}

export default LastPosts;
