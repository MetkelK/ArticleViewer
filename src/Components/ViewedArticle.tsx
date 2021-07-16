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
      copyright: string;
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
                <a href={article.url} aria-label="url">
                  <figure>
                    <img
                      src={article.media[0]["media-metadata"][2].url}
                      alt={article.media[0].caption}
                    />
                    <figcaption className="copyright">
                      {article.media[0].copyright}
                    </figcaption>
                  </figure>
                </a>
                <a
                  href={article.url}
                  aria-label="url"
                  className="info-container"
                >
                  <h3 aria-label="title">{article.title}</h3>
                </a>

                <p aria-label="abstract">{article.abstract}</p>
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
