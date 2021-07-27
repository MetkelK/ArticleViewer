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
          <div key={article._id} className="article">
            {article.multimedia.length > 0 && (
              <a href={article.web_url} target="_blank" rel="noreferrer">
                <figure>
                  <img
                    src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                    alt={article.multimedia[0].crop_name}
                    className="searched-article"
                  />
                </figure>
              </a>
            )}
            <a
              href={article.web_url}
              className="info-container"
              target="_blank"
              rel="noreferrer"
            >
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
