import React from 'react'

const ViewedArticle = () => {
    return (
        <div>
            <h1 aria-label="title">Title</h1>
            <h2 aria-label="byline">Byline</h2>
            <p aria-label="abstract">Abstract</p>
            <p aria-label="date">Date</p>
            <p aria-label="url">Url</p>
            <img aria-label="image" src="" alt="" />
        </div>
    )
}

export default ViewedArticle