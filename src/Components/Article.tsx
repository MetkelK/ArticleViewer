import { ArticleProps } from "./Interfaces";

const Article = (props: ArticleProps) => {
  console.log(props.story);
  return (
    <div className="mx-4 mb-12 pb-4 bg-white shadow-md border border-gray-200 rounded-lg max-w-fit dark:bg-gray-800 dark:border-gray-700">
      <a
        href={props.story.url}
        aria-label="url"
        target="_blank"
        rel="noreferrer"
      >
        {props.story.multimedia && (
          <figure>
            <img
              src={props.story.multimedia[0].url}
              alt={props.story.multimedia[0].caption}
              className="rounded-t-lg"
            />
            <figcaption className="text-gray-400 text-xs leading-3 tracking-wide my-2 mr-4 text-right">
              {props.story.multimedia[0].copyright}
            </figcaption>
          </figure>
        )}
      </a>

      <h3
        aria-label="title"
        className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white px-4"
      >
        {props.story.title}
      </h3>
      <p
        aria-label="abstract"
        className=" text-gray-700 font-normal mb-2 dark:text-gray-400 px-4"
      >
        {props.story.abstract}
      </p>
      <a
        href={props.story.url}
        aria-label="url"
        target="_blank"
        rel="noreferrer"
        className="text-gray-900 font-bold dark:text-white px-4"
      >
        Read More
      </a>
    </div>
  );
};

export default Article;
