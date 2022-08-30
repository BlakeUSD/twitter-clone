import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PublishIcon from '@mui/icons-material/Publish';
import { Avatar } from '@mui/material';
import React, { forwardRef } from 'react';
import "./Post.css";

/* I've run npm install react-flip-move. Afterwhich I imported forwardRef from react which 
allows me to use react-flip-move to give the animation a better aesthetic */
const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} alt="" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedIcon className="post__badge" />}
                                {" "}@{username}
                                {" • "}{new Date().toUTCString().slice(5, 11)}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <figure className='post__imageWrapper'>
                    <img
                        src={image}
                        alt="" />
                </figure>
                <div className='post__footer'>
                    <ChatBubbleOutlineOutlinedIcon fontSize="small" />
                    <RepeatOutlinedIcon fontSize="small" />
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
});

export default Post;