import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

export function getPostsFiles() {
    return fs.readdirSync(postDirectory)
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '') // Removes the file extension
    const filePath = path.join(postDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent)

    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData
}

export function getAllPost() {
    const postFiles = getPostsFiles()

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    })

    const sortPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
    return sortPosts
}

export function getFeaturedPosts() {
    const allPosts = getAllPost()

    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts;
}
