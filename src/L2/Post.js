import React from 'react';
import { useFetch } from './hooks';



function Post() {
    const post = useFetch('https://jsonplaceholder.typicode.com/posts/1', {});

    const { title, body } = post;
    return (
        <div>
            <h3>POST</h3>
            <p>{title}</p>
            <p><em>{body}</em></p>
        </div>
    );
}

export default Post;
