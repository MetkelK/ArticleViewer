import React from 'react'
import Article from './Article'
import { render, screen } from '@testing-library/react'

describe('Article', () => {
    it('Renders Article', () => {
        render(<Article />)
    })

    it('Article has Title', () => {
        render(<Article />)
        const title = screen.getByLabelText(/title/i)
        expect(title).toBeVisible()
    })

    it('Article has Byline', () => {
        render(<Article />)
        const title = screen.getByLabelText(/byline/i)
        expect(title).toBeVisible()
    })

    it('Article has Abstract', () => {
        render(<Article />)
        const title = screen.getByLabelText(/abstract/i)
        expect(title).toBeVisible()
    })

    it('Article has Author', () => {
        render(<Article />)
        const title = screen.getByLabelText(/author/i)
        expect(title).toBeVisible()
    })

    it('Article has Date', () => {
        render(<Article />)
        const title = screen.getByLabelText(/date/i)
        expect(title).toBeVisible()
    })
})