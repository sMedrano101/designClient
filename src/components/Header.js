import React from 'react';
import "../Header.css";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import FaceIcon from '@material-ui/icons/Face';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import IconButton from '@material-ui/core/IconButton';
import ShowChartSharpIcon from '@material-ui/icons/ShowChartSharp';;




export default function Home() {
    return (
        <div className="app_header">
            <div className="header_wrapper"> 
            <div className="header_logo">
                
            <IconButton>
          <ShowChartSharpIcon/>
          </IconButton>
            </div>
            <div className= "header_buttonHome">
                <a href="/">HomePage</a>
            </div>
            <div className="header_buttonFollow">
                <a href="/">Following</a>
            </div>
            <div className="header_search">
                <div className="header_searchContainer">
                <IconButton>
                <YoutubeSearchedForIcon/>
                </IconButton>
                <form>
                    <input type="text"/>
                    <button type="submit">Submit</button>
                </form>
                </div>
     
            </div>
            <div className="header_menuItems">
            <NotificationsActiveIcon/>
            <SpeakerNotesIcon/>
            <FaceIcon/>
            <KeyboardArrowDownIcon/>
                
            </div>
         </div>
        </div>
    )
}
