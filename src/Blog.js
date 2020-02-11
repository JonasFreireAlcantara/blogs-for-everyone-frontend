import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./Blog.css";

import Home from "./pages/home";
import About from "./pages/about";
import Categories from "./pages/categories";

const Blog = () => {
  return (
    <div className="Blog">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/category/:categoryUrl" component={Categories} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Blog;
