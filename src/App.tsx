import React, { useMemo } from "react";
import { FetchAllArticles } from "./hooks/fetchArticle";
import { FetchOneArticle } from "./hooks/fetchOneArticle";

function App() {
  const data = FetchAllArticles();
  const oneArticle = FetchOneArticle(5);
  return (
    <div>
      <div className="App">{data ? `Hello World ${data}` : "Loading..."}</div>
      <div className="App">
        {oneArticle ? `Hello World ${oneArticle}` : "Loading..."}
      </div>
    </div>
  );
}

export default App;
