import React, { useState, useEffect } from "react";
import "./App.css";

import SearchedArticle from "./Components/SearchedArticle";
import TopStory from "./Components/TopStory";
import ViewedArticle from "./Components/ViewedArticle";
import Modal from "./Components/Modal";
import Slider from "./Components/Slider";

const App = () => {
  const [query, setQuery] = useState<string | "">("");
  const [search, setSearch] = useState<boolean | false>(false);
  const [searchedStory, setSearchedStory] = useState<[]>([]);
  const [topStory, setTopStory] = useState<[]>([]);
  const [viewedStory, setViewedStory] = useState<[]>([]);
  const [guardianStory, setGuardianStory] = useState<[]>([]);

  useEffect(() => {
    const getArticles = () => {
      fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?&api-key=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => setTopStory(res.results))
        .catch((err) => console.log(err));

      fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?&api-key=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((res) => setViewedStory(res.results))
        .catch((err) => console.log(err));

      fetch(
        `https://content.guardianapis.com/world?api-key=${process.env.REACT_APP_GUARDIAN_KEY}`
      )
        .then((res) => res.json())
        .then((res) => setGuardianStory(res.response.results))
        .catch((err) => console.log(err));
    };
    getArticles();
  }, []);

  const searchArticles = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(true);
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setSearchedStory(res.response.docs))
      .catch((err) => console.log(err));
  };

  // use below for form fetch
  // const formSubmit = (e:React.FormEvent<HTMLFormElement>) => {}
  return (
    <div>
      <form onSubmit={searchArticles}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>
      <div>
        <Slider />
        <Modal search={search} setSearch={setSearch}>
          <SearchedArticle searchedstories={searchedStory} />
        </Modal>
        <TopStory topstories={topStory} />
        <ViewedArticle viewedstories={viewedStory} guardian={guardianStory} />
      </div>
    </div>
  );
};

export default App;
