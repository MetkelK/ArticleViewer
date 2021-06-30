import React from 'react'

interface Articles {
    _id: string;
    headline:{
        main: string;
    };
    byline:{
        original: string;
    };
    abstract: string;
    pub_date: string;
    web_url: string;
}

const SearchedArticle = ({searchedstories, setSearch}:any) => {
    if (searchedstories) {

        return (
            <div>
                {searchedstories.map((article: Articles, i:number) => (
                <div key={i}>
                    <h1 aria-label="title">{article.headline.main}</h1>
                    <h2 aria-label="byline">{article.byline.original}</h2>
                    <p aria-label="abstract">{article.abstract}</p>
                    <p aria-label="pub_">{article.pub_date}</p>
                    <a href={article.web_url} aria-label="url">New York Times</a>
                </div>
            ))}
            </div>
    )
    } else {
        return null
    }
}

export default SearchedArticle
