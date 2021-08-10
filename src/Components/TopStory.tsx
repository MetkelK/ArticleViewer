import React, { useState, useEffect } from "react";
import { MobileView } from "react-device-detect";

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

const TopStory = ({ topstories, headline }: any) => {
  const [progress, setProgress] = useState<number | 0>(0);

  const { innerWidth: width } = window;

  useEffect(() => {
    const scroller = document.querySelector<HTMLElement>(".scroller");

    const onScroll = () => {
      if (scroller !== null) {
        let scrollState = scroller.scrollLeft;
        let maxScroll = scroller.scrollWidth - scroller.clientWidth;

        setProgress(scrollState / maxScroll);
      }
    };

    scroller?.addEventListener("scroll", onScroll);
    return () => scroller?.removeEventListener("scroll", onScroll);
  }, [progress]);

  if (topstories && headline) {
    return (
      <div className="container">
        <div className="headline">
          <a
            href={headline.url}
            aria-label="url"
            target="_blank"
            rel="noreferrer"
          >
            <figure>
              <img
                src={headline.multimedia[0].url}
                alt={headline.multimedia[0].caption}
              />
              <figcaption className="copyright">
                {headline.multimedia[0].copyright}
              </figcaption>
            </figure>
          </a>
          <a
            href={headline.url}
            aria-label="url"
            target="_blank"
            rel="noreferrer"
          >
            <h3 aria-label="title">{headline.title}</h3>
          </a>
          <p aria-label="abstract">{headline.abstract}</p>
        </div>
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
        <MobileView>
          <div className="progress" style={{ width: width * 0.8 }}>
            <div
              className="filler"
              style={{ width: progress * (width * 0.8) }}
            ></div>
          </div>
        </MobileView>
      </div>
    );
  } else {
    return null;
  }
};

export default TopStory;
