const {test, describe} = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
const Blog = require('../models/blog')

describe('dummy tests', () => {
    test('dummy returns one', () => {
        const blogs = []

        const result = listHelper.dummy(blogs)
        assert.strictEqual(result, 1)
    })
    test('sum of blog likes', () => {
        const listWithOneBlog = [
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
                likes: 5,
                __v: 0
            }
        ]

        test('when list has only one blog, equals the likes of that', () => {
            const result = listHelper.totalLikes(listWithOneBlog)
            assert.strictEqual(result, 5)
        })
    })
})

describe('blog', () => {
    test('finding favourite blog', () => {
        const blogs = [{}]
        const result = listHelper.favouriteBlog(blogs)

        assert.deepStrictEqual(result, {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
        })
    })

    test('finding author with the most blogs', () => {
        const blogs = [{}]
        const result = listHelper.mostBlogs(blogs)

        assert.deepStrictEqual(result, {
            author: "Edsger W. Dijkstra",
            blogs: 3
        })
    })
})