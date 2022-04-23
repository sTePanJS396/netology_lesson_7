import React from 'react';
import WrapperComponent from '../hoc/WrapperComponent';

const Video = (props) => {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title='Видео'></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
}

export default WrapperComponent(Video)