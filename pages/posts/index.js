import React from 'react';
import AllPosts from "../../components/posts/all-posts";
import {getAllPost} from "../../lib/posts-util";

function AllPostsPage(props) {
    return (
        <AllPosts posts={props.posts} />
    );
}

export function getStaticProps() {
    const allPost = getAllPost();

    return {
        props: {
            posts: allPost
        }
    }
}

export default AllPostsPage;