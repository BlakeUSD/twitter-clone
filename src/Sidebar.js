import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from "@mui/material";

function Sidebar() {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar__twitterIcon' />

            <SidebarOption active Icon={TagOutlinedIcon} text="Home" />
            <SidebarOption Icon={SearchOutlinedIcon} text="Explore" />
            <SidebarOption Icon={NotificationsOutlinedIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlinedIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

            <Button variant="outlined" className='sidebar__tweet' fullWidth>
                Tweet
            </Button>
        </div>
    )
}

export default Sidebar;