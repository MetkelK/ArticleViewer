import React from 'react'
import TopStory from './TopStory'
import { render, screen } from '@testing-library/react'

const data = [{
    title: "title",
    byline: "byline",
    abstract: "abstract",
    date: "date",
    url: "www.url.com",
}]

describe('Article', () => {
    it('Renders Article', () => {
        render(<TopStory topstories={data}/>)
    })

    it('Article has Title', () => {
        render(<TopStory topstories={data}/>)
        const title = screen.getByRole('heading', {
            name: /title/i
          })
        expect(title).toBeVisible()
    })

    it('Article has Byline', () => {
        render(<TopStory topstories={data}/>)
        const byline = screen.getByRole('heading', {
            name: /byline/i
          })
        expect(byline).toBeVisible()
    })

    it('Article has Abstract', () => {
        render(<TopStory topstories={data}/>)
        const abstract = screen.getByLabelText(/abstract/i)
        expect(abstract).toBeVisible()
    })

    it('Article has Date', () => {
        render(<TopStory topstories={data}/>)
        const date = screen.getByLabelText(/date/i)
        expect(date).toBeVisible()
    })

    it('Article has Url', () => {
        render(<TopStory topstories={data}/>)
        const url = screen.getByLabelText(/url/i)
        expect(url).toBeVisible()
    })

})