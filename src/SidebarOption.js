import React from 'react'
import "./SidebarOption.css"

/* in the SidebarOption function we've destructured the prop with the {}
and passed in variables which we'll use in Sidebar.js. This is done to make
the component reusable */

function SidebarOption({ active, text, Icon }) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;