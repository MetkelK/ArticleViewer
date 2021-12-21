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
      <div className="container mx-auto">
        <div className="mx-4 mb-12 pb-4 bg-white shadow-md border border-gray-200 rounded-lg max-w-fit dark:bg-gray-800 dark:border-gray-700">
          <a
            href={headline.url}
            aria-label="url"
            target="_blank"
            rel="noreferrer"
          >
            {headline.multimedia && (
              <figure>
                <img
                  src={headline.multimedia[0].url}
                  alt={headline.multimedia[0].caption}
                  className="rounded-t-lg"
                />
                <figcaption className="text-gray-400 text-xs leading-3 tracking-wide my-2 mr-4 text-right">
                  {headline.multimedia[0].copyright}
                </figcaption>
              </figure>
            )}
          </a>

          <h3
            aria-label="title"
            className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white px-4"
          >
            {headline.title}
          </h3>
          <p
            aria-label="abstract"
            className=" text-gray-700 font-normal mb-2 dark:text-gray-400 px-4"
          >
            {headline.abstract}
          </p>
          <a
            href={headline.url}
            aria-label="url"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 font-bold dark:text-white px-4"
          >
            Read More
          </a>
        </div>

        <div className="flex overflow-x-scroll mx-4">
          {topstories.map((article: Articles, i: number) => (
            <div
              key={i}
              className="min-w-[80vw] mr-4 mb-12 pb-4 bg-white overflow-hidden shadow-md border border-gray-200 rounded-lg max-w-fit dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <figure className="min-w-full max-h-96 lg:max-h-[48rem] xl:max-h-[64rem] overflow-hidden mb-4 ">
                <img
                  src={article.multimedia[0].url}
                  alt={article.multimedia[0].caption}
                  className="w-full object-cover rounded-t-lg"
                />
                <figcaption className="text-gray-400 text-xs leading-3 tracking-wide mt-2 mr-4 text-right">
                  {article.multimedia[0].copyright}
                </figcaption>
              </figure>

              <h3
                aria-label="title"
                className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white px-4"
              >
                {article.title}
              </h3>

              <p
                aria-label="abstract"
                className="text-gray-700 font-normal mb-2 dark:text-gray-400 px-4"
              >
                {article.abstract}
              </p>
              <a
                href={article.url}
                aria-label="url"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 font-bold dark:text-white px-4"
              >
                Read More{" "}
              </a>
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
