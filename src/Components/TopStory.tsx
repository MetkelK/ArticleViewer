import React from "react";

interface Articles {
  title: string;
  byline: string;
  abstract: string;
  date: string;
  url: string;
}

const TopStory = ({ topstories }: any) => {
  if (topstories) {
    return (
      <div className="scroller">
        {topstories.map((article: Articles, i: number) => (
          <div key={i} className="toparticle">
            <h1 aria-label="title">{article.title}</h1>
            <h2 aria-label="byline">{article.byline}</h2>
            <p aria-label="abstract">{article.abstract}</p>
            <p aria-label="date">{article.date}</p>
            <a href={article.url} aria-label="url">
              New York Times
            </a>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default TopStory;
