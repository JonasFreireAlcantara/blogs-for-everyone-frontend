import React from "react";

import Header from "../../components/header";
import Footer from "../../components/footer";
import LastPosts from "../../components/last-posts";

const Home = () => {
  return (
    <div>
      <Header />

      <LastPosts />

      {/* <h1>Home</h1> */}

      <Footer />
    </div>
  );
};

export default Home;
