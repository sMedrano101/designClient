import React from 'react';
import "../Header.css";


export default function Home() {
    return (
        <div className="app_header">
            <div className="header_wrapper"> 
            <div className="header_logo">
                <p>LOGO</p>
            </div>
            <div className= "header_buttonHome">
                <p>HomePage</p>
            </div>
            <div className="header_buttonFollow">
                <p>Following</p>
            </div>
            <div className="header_search">
                <div className="header_searchContainer">
                <p>SearchIcon</p>
                <form>
                    <input type="text"/>
                    <button>Submit</button>
                </form>
                </div>
     
            </div>
            <div className="header_menuItems">
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
            </div>
         </div>
        </div>
    )
}
