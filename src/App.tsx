import React, {useState} from 'react';
import './App.css';

import Article from './Components/Article'
import TopStory from './Components/TopStory';
import ViewedArticle from './Components/ViewedArticle';

const App = () => {
  const [query, setQuery] = useState<string | ''>('')
  const [topStory, setTopStory] = useState<[]>([])
  const [viewedStory, setViewedStory] = useState<[]>([])

  const getArticles = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?&api-key=${process.env.REACT_APP_API_KEY}`
    )
    .then(res => res.json())
    .then(res => setTopStory(res.results))
    .catch(err => console.log(err))

    fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?&api-key=${process.env.REACT_APP_API_KEY}`
    )
    .then(res => res.json())
    .then(res => setViewedStory(res.results))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={getArticles}>
        <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} value={query}/>
      </form>
      <div>
        <Article />
        <TopStory topstories={topStory}/>
        <ViewedArticle viewedstories={viewedStory}/>

      </div>
    </div>
  );
}

export default App;
