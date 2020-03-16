import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import LastPosts from '../../components/last-posts';
import PostPreview from '../../components/post-preview';

class Home extends Component {
  constructor() {
    super();
    this.state = {};

    global.document.title = 'Espaço da Tecnologia';
  }

  async componentDidMount() {
    const posts = (await api.get(`/posts`)).data;

    this.setState({ posts });
  }

  render() {
    const { posts = [] } = this.state;

    return (
      <div id='home'>
        <Header />

        <main>
          <LastPosts />

          <section id='home-posts-preview'>
            <div>
              {posts.map(post => (
                <div key={post._id}>
                  <PostPreview post={post} />
                  <hr className='home-posts-preview-horizontal-line' />
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Home;
