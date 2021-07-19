import React from "react";

interface Articles {
  _id: string;
  headline: {
    main: string;
  };
  byline: {
    original: string;
  };
  abstract: string;
  pub_date: string;
  web_url: string;
  multimedia: {
    length: number;
    [0]: {
      url: string;
      crop_name: string;
    };
  };
}

const SearchedArticle = ({ searchedstories }: any) => {
  if (searchedstories) {
    return (
      <div className="modal-container">
        {searchedstories.map((article: Articles, i: number) => (
          // <div key={i} className="article">
          //   <h1 aria-label="title">{article.headline.main}</h1>
          //   <h2 aria-label="byline">{article.byline.original}</h2>
          //   <p aria-label="abstract">{article.abstract}</p>
          //   <p aria-label="date">{article.pub_date}</p>
          //   <a href={article.web_url} aria-label="url">
          //     New York Times
          //   </a>
          // </div>
          <div key={article._id} className="article">
            {article.multimedia.length > 0 && (
              <a href={article.web_url}>
                <figure>
                  <img
                    src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                    alt={article.multimedia[0].crop_name}
                  />
                </figure>
              </a>
            )}
            <a href={article.web_url} className="info-container">
              <h3>{article.headline.main}</h3>
            </a>
            <p>{article.abstract}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default SearchedArticle;
