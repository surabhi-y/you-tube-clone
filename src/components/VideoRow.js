import React from 'react';
import './videoRow.css';

function VideoRow({
    image,
    channel,
    views,
    subs,
    description,
    title,timestamp
}) {
    return (
        <div className="videoRow">
            <img src={image} alt="jhjkhkj"/>
            <div className="videoRow__text">{title}
            <h3>{title}</h3>
            <p className="VideoRow__headline">
                {channel}.<span className="videoRow__subs">
                <span className="videoRow__subsNUmber">{subs}</span> Subscribers{views} views .{timestamp}
                </span>
            </p>
            <p className="videoRow__description">{description}</p>
            </div>
            
        </div>
    )
}

export default VideoRow;
