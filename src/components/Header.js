import React,{useState} from 'react';
import './header.css';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';


function Header() {
    const [inputSearch,setInoutSearch]=useState('');

function handler(e){
            setInoutSearch(e.target.value);
}

    return (
        <div className='header'>
             <MenuIcon/>
            <img
             className="header__logo" 
             src='youtube.svg' alt=""
             />
             <div className="header__input">
             
             <input 
             onChange={handler}
              value={inputSearch}
               placeholder="search" 
               type="text"/>
            

             <Link to={`/search/${inputSearch}`}>
             <SearchIcon className="header__intputButton"/>
             </Link>
             </div>
            

             <div className="header__icons">
             <VideoCallSharpIcon className="header__icon"/>
             <AppsIcon className="header__icon"/>
             <NotificationsIcon className="header__icon"/>
             <Avatar className="header__icon"
             src="" alt=""
             />
             </div>
            
             
             
        </div>
    )
}

export default Header
