import React from 'react';
import Video from './Video';
import Article from './Article';

const List = (props) => {
    return props.list.map((item, index) => {
        switch (item.type) {
            case 'video':
                return (
                    <Video {...item} key={index} />
                );

            case 'article':
                return (
                    <Article {...item} key={index} />
                );
            default: return item
        }
    });
}

export default List