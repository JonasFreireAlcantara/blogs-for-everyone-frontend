import React from "react";

import "./styles.css";

import Header from "../../components/header";
import LastPosts from "../../components/last-posts";
import Footer from "../../components/footer";

const About = () => {
  return (
    <div id="about">
      <Header />

      <section>
        <LastPosts />
      </section>

      <Footer />
    </div>
  );
};

export default About;
