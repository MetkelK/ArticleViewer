import React from 'react';
import './App.css';

import Article from './Components/Article'
import TopStory from './Components/TopStory';
import ViewedArticle from './Components/ViewedArticle';

const App = () => {
  return (
    <div>
      <h1 aria-label="test">test</h1>
      <div>
        <Article />
        <TopStory />
        <ViewedArticle />

      </div>
    </div>
  );
}

export default App;
