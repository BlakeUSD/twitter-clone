import React, { useEffect, useState } from 'react';
import TweetBox from './TweetBox';
import './Feed.css';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    /* the useEffect will search through our firebase database 
    map through each document, map all of the data from each document
    and pass that data into our Post component variables */
    useEffect(() => {
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => doc.data()))
        ));
    }, []);

    return (
        <div className='feed'>
            <div className='feed__header'>
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
                {posts.map(({avatar, displayName, image, text, username, verified, timestamp}) => (
                    <Post
                        key={text}
                        displayName={displayName}
                        username={username}
                        verified={verified}
                        text={text}
                        avatar={avatar}
                        image={image}
                        time={timestamp}
                    />
                ))}
            </FlipMove>
        </div>
    );
}

export default Feed;