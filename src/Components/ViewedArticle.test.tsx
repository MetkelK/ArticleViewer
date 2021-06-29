import React from 'react'
import ViewedArticle from './ViewedArticle'
import { render, screen } from '@testing-library/react'

describe('Article', () => {
    it('Renders Article', () => {
        render(<ViewedArticle />)
    })

    it('Article has Title', () => {
        render(<ViewedArticle />)
        const title = screen.getByLabelText(/title/i)
        expect(title).toBeVisible()
    })

    it('Article has Byline', () => {
        render(<ViewedArticle />)
        const byline = screen.getByLabelText(/byline/i)
        expect(byline).toBeVisible()
    })

    it('Article has Abstract', () => {
        render(<ViewedArticle />)
        const abstract = screen.getByLabelText(/abstract/i)
        expect(abstract).toBeVisible()
    })

    it('Article has Date', () => {
        render(<ViewedArticle />)
        const date = screen.getByLabelText(/date/i)
        expect(date).toBeVisible()
    })

    it('Article has Url', () => {
        render(<ViewedArticle />)
        const url = screen.getByLabelText(/url/i)
        expect(url).toBeVisible()
    })

    it('Article has Image', () => {
        render(<ViewedArticle />)
        const image = screen.getByLabelText(/image/i)
        expect(image).toBeVisible()
    })
})