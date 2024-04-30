import React from 'react';
import classes from './post-content.module.css'
import PostHeader from "./post-header";

const DUMMY_POSTS = {
    slug: "getting-started",
    title: "Getting Started",
    image: "getting-started.png",
    date: "2024-02-10",
    content: `# This is first post`
}

function PostContent(props) {
    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
            {DUMMY_POSTS.content}
        </article>
    );
}

export default PostContent;
