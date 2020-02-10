import React from "react";

import "./styles.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import LastPosts from "../../components/last-posts";
import PostPreview from "../../components/post-preview";
import AccordionMenu from "../../components/accordion-menu";

const posts = [1, 2, 3, 4];

const links = [
  {
    title: "Docker",
    url: "url1"
  },
  {
    title: "Machine Learning",
    url: "url2"
  },
  {
    title: "Web Development",
    url: "url3"
  },
  {
    title: "Security",
    url: "url4"
  }
];

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

        <AccordionMenu title="Categorias" links={links}></AccordionMenu>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
