import React, { useState, useEffect } from "react";
import Client from "./config/contentful";
import Post from "./Post";
import Posts from "./Posts";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    Client.getEntries({
      content_type: "blogPost",
    })
      .then((response) => setPosts(response.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <h1><u>My Contentful Blog</u></h1>
        <Switch>
          <Route path="/post/:slug">
            <Post posts={posts} />
          </Route>
          <Route path="/">
            <Posts posts={posts} />
          </Route>
        </Switch>
      </header>
    </div>
  );
};

export default App;
