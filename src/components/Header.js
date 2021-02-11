import React, {useState} from 'react';
import "../Header.css";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import FaceIcon from '@material-ui/icons/Face';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import IconButton from '@material-ui/core/IconButton';
import ShowChartSharpIcon from '@material-ui/icons/ShowChartSharp';
import db from "../firebase"; //I recieved error. Need to import config file from firebase.js




export default function Header(props) {

      // const [data, setData] = useState([]);

    //STEP 2 function searchData(event) { /*calling the data on search bar: line input called getData created function. used console.log(event.data)..  -> To push what was written console.log(event.target.value) */
    //     console.log(event.target.value)
    // }

    //STEP 1(inside return). <input type="text" onChange={searchData}> </input> This step can also be used.
/////////// ABOVE in Line code for inline./////////////////////////////



    const [input, setInput] = useState(""); //setInput used below <input> onChange={e() => setInput(e.target.value)} </input>

    console.log(input, "checking input");// test for line 25


    //fb//for the button once user click to search//

    console.log(props, "what is on props");

    const onSearchSubmit = (e) => {
        e.preventDefault(); //remember prevent refresh
        props.onSubmit(input); //receiving.
        db.collection('term').add({ 
            terms: input, //called terms what we could storage on firebase. documentation showshttps://firebase.google.com/docs/firestore/manage-data/add-data
        })
    }


    
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
                    <input type="text" onChange={(e) => setInput(e.target.value)}/> 
                    <button type="submit" onClick={onSearchSubmit}>Submit</button>
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
