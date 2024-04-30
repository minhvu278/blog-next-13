import React from 'react';
import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
    {
        slug: "getting-started",
        title: "Getting Started",
        image: "getting-started.png",
        excerpt: "NextJS is framework ",
        date: "2024-02-10"
    },
    {
        slug: "getting-started2",
        title: "Getting Started",
        image: "getting-started.png",
        excerpt: "NextJS is framework ",
        date: "2024-02-10"
    },
    {
        slug: "getting-started3",
        title: "Getting Started",
        image: "getting-started.png",
        excerpt: "NextJS is framework ",
        date: "2024-02-10"
    },
    {
        slug: "getting-started4",
        title: "Getting Started",
        image: "getting-started.png",
        excerpt: "NextJS is framework",
        date: "2024-02-10"
    },
]

function AllPostsPage(props) {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    );
}

export default AllPostsPage;