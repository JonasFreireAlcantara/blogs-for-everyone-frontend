import React from "react";

import "./styles.css";

import Header from "../../components/header";
import LastPosts from "../../components/last-posts";
import Footer from "../../components/footer";

const Categories = () => {
  return (
    <div id="categories">
      <Header />

      <section>
        <LastPosts />
      </section>

      <Footer />
    </div>
  );
};

export default Categories;
