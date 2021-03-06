export interface Story {
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

export interface ArticleProps {
    story: Story
}

export interface testProps {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}