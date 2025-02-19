const {isValidObjectId} = require("mongoose");
const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((a, {likes}) => a + likes, 0)
}

const favouriteBlog = (blogs) => {
    return blogs.filter(blog => {
        const max = 0
        let value = blog.likes
        if (value >= max) {
            return {title, author, likes} = blog
        }
    })
}

const mostBlogs = (blogs) => {
    const blog_authors = {}
    let max = 0
    let max_key = ''

    blogs.forEach(blog => {
        if (blog.author in blog_authors) {
            blog_authors[blog.author] = blog_authors[blog.author] + 1
        } else {
            blog_authors[blog.author] = 0
        }
    })

    for (const [key, value] of Object.entries(blog_authors)) {
        if (value > max) {
            max = value
            max_key = key
        }
    }
    return {max_key, max}

}

const mostLikes = (blogs) => {
    blogs.forEach(blog => {
        
    })
}

module.exports = {dummy, totalLikes, favouriteBlog, mostBlogs, mostLikes};