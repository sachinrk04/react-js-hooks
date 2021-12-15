import React from 'react';
import { useFetch } from './hooks';

function PostList() {
    
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts', []);

    return (
        <div className='Stories'>
            <h3>POST LIST</h3>
            {
                posts.map(post => {
                    const { id, title, body, userId } = post;

                    return (
                        <div key={id}>
                            <h3>-- {title} --</h3>
                            <div>{userId} - {body}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default PostList;