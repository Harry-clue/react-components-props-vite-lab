import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <ArticleList posts={blogData} />
      <About />
      
    </div>
  );
}

export default App;
