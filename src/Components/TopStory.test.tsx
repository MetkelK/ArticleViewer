import React from 'react'
import TopStory from './TopStory'
import { render, screen } from '@testing-library/react'

describe('Article', () => {
    it('Renders Article', () => {
        render(<TopStory />)
    })

    it('Article has Title', () => {
        render(<TopStory />)
        const title = screen.getByLabelText(/title/i)
        expect(title).toBeVisible()
    })

    it('Article has Byline', () => {
        render(<TopStory />)
        const byline = screen.getByLabelText(/byline/i)
        expect(byline).toBeVisible()
    })

    it('Article has Abstract', () => {
        render(<TopStory />)
        const abstract = screen.getByLabelText(/abstract/i)
        expect(abstract).toBeVisible()
    })

    it('Article has Date', () => {
        render(<TopStory />)
        const date = screen.getByLabelText(/date/i)
        expect(date).toBeVisible()
    })

    it('Article has Url', () => {
        render(<TopStory />)
        const url = screen.getByLabelText(/url/i)
        expect(url).toBeVisible()
    })

    it('Article has Image', () => {
        render(<TopStory />)
        const image = screen.getByLabelText(/image/i)
        expect(image).toBeVisible()
    })
})