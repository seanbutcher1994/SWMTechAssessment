import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleList from "./pages/ArticleList/ArticleList";
import SingleArticle from "./pages/SingleArticle/singleArticlePage/SingleArticle";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/:id" element={<SingleArticle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
