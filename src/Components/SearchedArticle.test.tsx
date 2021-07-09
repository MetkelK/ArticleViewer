import React from 'react'
import SearchedArticle from './SearchedArticle'
import { render, screen } from '@testing-library/react'

describe('Article', () => {
    it('Renders Article', () => {
        render(<SearchedArticle />)
    })

    it('Article has Title', () => {
        render(<SearchedArticle />)
        const title = screen.getByLabelText(/title/i)
        expect(title).toBeNull()
    })

    it('Article has Byline', () => {
        render(<SearchedArticle />)
        const byline = screen.getByLabelText(/byline/i)
        expect(byline).toBeVisible()
    })

    it('Article has Abstract', () => {
        render(<SearchedArticle />)
        const abstract = screen.getByLabelText(/abstract/i)
        expect(abstract).toBeVisible()
    })

    it('Article has Date', () => {
        render(<SearchedArticle />)
        const date = screen.getByLabelText(/date/i)
        expect(date).toBeVisible()
    })

    it('Article has Url', () => {
        render(<SearchedArticle />)
        const url = screen.getByLabelText(/url/i)
        expect(url).toBeVisible()
    })

    
})