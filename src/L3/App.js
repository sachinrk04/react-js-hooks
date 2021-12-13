import React, { useState } from 'react';
import Post from './Post';
import PostList from './PostList';
import Tasks from './Tasks';

function App() {
  const [userQuery, setUserQuery] = useState('');

  const updateUserQuery = (event) => {
    console.log("event.target.value----->", event.target.value)
    setUserQuery(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') searchQuery();
  }

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <div className='form'>
        <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Post />
      <hr />
      <Tasks />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
