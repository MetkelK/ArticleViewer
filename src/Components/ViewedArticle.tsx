import React from "react";

interface Articles {
  title: string;
  byline: string;
  abstract: string;
  published_date: string;
  url: string;
  media: {
    length: number;
    [0]: {
      ["media-metadata"]: {
        [2]: {
          url: string;
        };
      };
      caption: string;
    };
  };
}

const ViewedArticle = ({ viewedstories }: any) => {
  if (viewedstories) {
    return (
      <div className="article-container">
        {viewedstories.map((article: Articles, i: number) => {
          if (article.media.length > 0)
            return (
              <div key={i} className="article">
                <img
                  src={article.media[0]["media-metadata"][2].url}
                  alt={article.media[0].caption}
                />
                <div className="info-container">
                  <h1 aria-label="title">{article.title}</h1>
                  <h2 aria-label="byline">{article.byline}</h2>
                  <p aria-label="abstract">{article.abstract}</p>
                  <p aria-label="date">{article.published_date}</p>
                  <a href={article.url} aria-label="url">
                    Read More
                  </a>
                </div>
              </div>
            );
          return null;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default ViewedArticle;
