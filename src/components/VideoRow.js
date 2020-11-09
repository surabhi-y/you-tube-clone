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
            <div className="videoRow__image">
            <img src={image} alt="jhjkhkj"/>
            </div>
            <div className="videoRow__text">
            <h4>{title}</h4>
            <p className="VideoRow__headline">
                {channel}.<span className="videoRow__subs"><br/>
                <span className="videoRow__subsNUmber">{subs}</span><br/> Subscribers{views}<br/> views .{timestamp}
                </span>
            </p>

            <p className="videoRow__description">{description}</p>
            </div>
            
        </div>
    )
}

export default VideoRow;
