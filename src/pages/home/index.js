import React, { Component } from 'react';

import api from '../../services/api';
import BlogConfiguration from '../../config/BlogConfiguration';

import './styles.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import LastPosts from '../../components/last-posts';
import PostPreview from '../../components/post-preview';

const PAGE_SIZE = 5;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      totalCount: 1
    };

    const { pageTitle } = BlogConfiguration.defaults;

    global.document.title = pageTitle;
  }

  async componentDidMount() {
    const { page } = this.state;
    const response = await api.get(`/posts?page=${page}`);

    const posts = response.data;
    const totalCount = response.headers['x-total-count'];

    this.setState({ posts, totalCount });
  }

  async handlePreviousPage() {
    let { page } = this.state;

    if (page <= 1) {
      return;
    }

    page -= 1;

    const posts = (await api.get(`/posts?page=${page}`)).data;

    this.setState({ posts, page });
  }

  async handleNextPage() {
    let { page } = this.state;
    const { totalCount } = this.state;

    const maxNumberOfPages = Math.ceil(totalCount / PAGE_SIZE);
    if (page >= maxNumberOfPages) {
      return;
    }

    page += 1;

    const posts = (await api.get(`/posts?page=${page}`)).data;

    this.setState({ posts, page });
  }

  render() {
    const { posts = [], page, totalCount } = this.state;

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

            <nav>
              <button
                className='buttons-save'
                type='button'
                onClick={() => this.handlePreviousPage()}
              >
                Anterior
              </button>

              <span>
                Página {page} de {Math.ceil(totalCount / PAGE_SIZE)}
              </span>

              <button
                className='buttons-save'
                type='button'
                onClick={() => this.handleNextPage()}
              >
                Próxima
              </button>
            </nav>
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Home;
