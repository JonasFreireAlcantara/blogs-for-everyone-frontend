import React from "react";

import "./styles.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import LastPosts from "../../components/last-posts";
import PostPreview from "../../components/post-preview";

const posts = [1, 2, 3, 4];

const Home = () => {
  return (
    <div id="home">
      <Header />

      <main>
        <LastPosts />

        <section id="home-posts-preview">
          {posts.map(post => (
            <div key={post}>
              <PostPreview />
              <hr className="home-posts-preview-horizontal-line" />
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
