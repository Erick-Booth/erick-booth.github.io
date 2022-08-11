import React from 'react';

const Scroll = (props) => {
    return (
        <div style={ { overflowY: 'scroll', border: '5px solid teal', maxHeight: '800px', margin: '2% 0' } }>
            { props.children }
        </div>
    );
};

export default Scroll;
