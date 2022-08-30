import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css'
import db from "./firebase"
import firebase from 'firebase/compat/app';

/* the TweetBox function contains our useState which takes the input of our text and image fields
passes the events in those fields through our state handlers, then maps the event values through 
to the appropriate objects from the firebase database. Afterwhich it returns both fields to an empty string. */
function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Elon Musk',
            username: 'elonmusk',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://www.sheknows.com/wp-content/uploads/2018/12/d1fcfg1wyzkeqwicrzxg.jpeg",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), // uses the firebase server time stamp as the one true source, this compensates for users in different time zones 
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar src="https://www.sheknows.com/wp-content/uploads/2018/12/d1fcfg1wyzkeqwicrzxg.jpeg" alt="profile picture" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening"
                        type="text"
                    />
                </div>
                <input
                    onChange={(e) => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className='tweetBox__imageInput'
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className='tweetBox__tweetButton'
                >
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;