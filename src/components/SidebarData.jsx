import React from 'react';

import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
    },
    {
        title: 'About',
        path: '/about',
        icon: <ImIcons.ImParagraphLeft/>,
        cName: 'nav-text',
    },
    {
        title: 'Contacts',
        path: '/contacts',
        icon: <MdIcons.MdContactPhone/>,
        cName: 'nav-text',
    },
    
];
