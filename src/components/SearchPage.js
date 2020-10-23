import React from 'react';
import './searchpage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="/images/mqdefault(2).webp"
            ChannelRow
            verified
            subs
            noOfVideos
            description 
            />
            <hr/>

            <VideoRow
            image="images/mqdefault(2).webp"
            channel="clever programing"
            views="1.4M"
            subs="656k"
            description="dfadjfamf nijafij"
            title="Watch: World War II bomb explodes underwater in Poland, no injuries"
            timestamp="6 days ago"/>

        </div>
    )
}

export default SearchPage;
