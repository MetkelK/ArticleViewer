import React, { useState, useEffect } from "react";

interface Articles {
  title: string;
  byline: string;
  abstract: string;
  url: string;
  multimedia: {
    length: number;
    [0]: {
      caption: string;
      copyright: string;
      height: number;
      width: number;
      url: string;
    };
  };
}

const TopStory = ({ topstories }: any) => {
  const [progress, setProgress] = useState<number | 0>(0);

  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>(".scroller");

    const onScroll = () => {
      if (scroller !== null) {
        let scrollState = scroller.scrollLeft;
        let maxScroll = scroller.scrollWidth - scroller.clientWidth;

        setProgress(scrollState / maxScroll);
        console.log(progress);
      }
    };

    scroller?.addEventListener("scroll", onScroll);
    return () => scroller?.removeEventListener("scroll", onScroll);
  }, [progress]);

  if (topstories) {
    return (
      <div className="scroller">
        {topstories.map((article: Articles, i: number) => (
          <div key={i} className="toparticle">
            <a
              href={article.url}
              aria-label="url"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <img
                  src={article.multimedia[0].url}
                  alt={article.multimedia[0].caption}
                />
                <figcaption className="copyright">
                  {article.multimedia[0].copyright}
                </figcaption>
              </figure>
            </a>
            <a
              href={article.url}
              aria-label="url"
              target="_blank"
              rel="noreferrer"
            >
              <h3 aria-label="title">{article.title}</h3>
            </a>
            <p aria-label="abstract">{article.abstract}</p>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default TopStory;
