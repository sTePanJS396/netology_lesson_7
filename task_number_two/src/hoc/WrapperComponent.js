import React from 'react';
import Popular from '../components/Popular';
import New from '../components/New';

function WrapperComponent(Component) {
    return function (props) {
        console.log(props);
        if (props.views > 1000) {
            return (
                <Popular>
                    <Component {...props}/>
                </Popular>
            )
        }

        if (props.views < 100 ) {
            return (
                <New>
                    <Component {...props}/>
                </New>
            );
        }
        return <Component {...props}/> 
    }
}

export default WrapperComponent;