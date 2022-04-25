import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets__input'>
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder='Search Twitter' type='text' />
            </div>

            <div className='widgets__widgetContainer'>
                <h2>What's happening?</h2>

                {/* I used "npm i react-twitter-embed" to import this third party library which pulls data 
                from Twitter to display actual twitter feed results  */}
                <TwitterTweetEmbed tweetId={"1501554954753871886"} />

                <TwitterShareButton
                    url={"https://www.dellanoblake.com"}
                    options={{ text: "One of the best e-portfolio's I've ever seen", via: "elonmusk" }}
                />

                <TwitterTimelineEmbed
                    sourcetype="profile"
                    screenName="elonmusk"
                    options={{ height: 400 }}
                />

            </div>
        </div>
    );
}

export default Widgets;