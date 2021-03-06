import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog">
        <BlogPage />
      </Route>
      <Route exact path="/projects">
        <ProjectsPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
    </Switch>
  );
}
export default Routes;
