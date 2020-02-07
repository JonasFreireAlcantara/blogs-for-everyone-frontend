import React from "react";

import "./styles.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import LastPosts from "../../components/last-posts";
import PostPreview from "../../components/post-preview";

const Home = () => {
  return (
    <div id="home">
      <Header />

      <section>
        <LastPosts />

        <PostPreview />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
