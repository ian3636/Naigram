import React, { useState } from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Timeline from './Timeline'



function Sidebar  ()  {

    
  return (

    <div className='side'>
      <h1>Nai_Gram</h1>
    <div className='more'>
       <i> <HomeIcon /> Home</i>
       <i><SearchIcon/> Search</i>
        <i><ExploreIcon /> Explore</i>
        <i><PlayCircleIcon /> Reels</i>
        <i><MessageIcon /> Messages</i>
        <i><CircleNotificationsIcon /> Notifications</i>
        <i><AccountCircleIcon /> Create</i>
        <i><AddCircleIcon /> Profile</i>
        <i><MoreHorizIcon /> More</i>
    </div>

    <div className='tline'>
      
        <Timeline
        />
    
    </div>
    </div>
    
  )
}

export default Sidebar
