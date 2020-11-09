import React from 'react';
import './searchpage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import VideoRow from './VideoRow';


function SearchPage({data}) {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
           
            {data?.items?.map((item, index) => {
          return ( <VideoRow
            image={item.snippet.thumbnails.default.url}
            channel={item.snippet.channelTitle}
            views="1.4M"
            subs="656k"
            description={item.snippet.description}
            title={item.snippet.title}
            timestamp={item.snippet.publishedAt}/>)
          })}

        </div>
    )
}

export default SearchPage;
