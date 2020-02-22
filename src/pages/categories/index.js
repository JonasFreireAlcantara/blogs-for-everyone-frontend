import React, { Component } from "react";

import api from "../../services/api";

import "./styles.css";

import Header from "../../components/header";
import LastPosts from "../../components/last-posts";
import PostPreview from "../../components/post-preview";
import Footer from "../../components/footer";

class Categories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    this.fetchCategories();
    this.fetchPosts();
  }

  componentDidUpdate(prevProps) {
    const { categoryUrl: previousCategoryUrl } = prevProps.match.params;
    const { categoryUrl: actualCategoryUrl } = this.props.match.params;

    if (previousCategoryUrl !== actualCategoryUrl) {
      this.fetchCategories();
      this.fetchPosts();
    }
  }

  async fetchCategories() {
    const { categoryUrl } = this.props.match.params;
    const category = (await api.get(`/categories/${categoryUrl}`)).data;
    this.setState({ category });
  }

  async fetchPosts() {
    const { categoryUrl } = this.props.match.params;
    const posts = (await api.get(`/categories/posts/${categoryUrl}`)).data;
    this.setState({ posts });
  }

  render() {
    const posts = this.state.posts || [];
    const category = this.state.category || { name: "" };

    document.title = category.name;

    return (
      <div id="categories">
        <Header />

        <main>
          <LastPosts />

          <section id="category-posts-preview">
            <strong>{category.name}</strong>
            {posts.map(post => (
              <div key={post._id}>
                <PostPreview post={post} />
                <hr className="home-posts-preview-horizontal-line" />
              </div>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Categories;
