import React from "react";

interface Articles {
  webTitle: string;
  id: string | number;
  title: string;
  byline: string;
  abstract: string;
  published_date: string;
  webUrl: string;
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

const ViewedArticle = ({ viewedstories, guardian }: any) => {
  let combined = [];
  for (let i = 0; i < viewedstories.length; i++) {
    combined.push(viewedstories[i]);
    combined.push(guardian[i]);
  }
  let combinedArticles = combined.filter(Boolean);

  if (viewedstories || guardian) {
    return (
      <div className="article-container">
        {combinedArticles.map((article: Articles) => {
          if (typeof article.id === "number") {
            if (article.media.length > 0) {
              return (
                <div key={article.id} className="article">
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
            }
          } else if (typeof article.id === "string") {
            return (
              <div key={article.id} className="article">
                <a href={article.webUrl}>
                  <h1>{article.webTitle}</h1>
                </a>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default ViewedArticle;
