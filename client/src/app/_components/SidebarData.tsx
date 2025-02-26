import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import EqualizerIcon from '@mui/icons-material/Equalizer';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />, 
        link: "/"
    },
    {
        title: "Jobs",
        icon: <GroupsIcon />,
        link: "/jobs"
    },
    {
        title: "Tier List",
        icon: <EqualizerIcon />,
        link: "/tierlist"
    }
]