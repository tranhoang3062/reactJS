import React from 'react';
import './Instructions';
import emoji from './Instructions'

export default function Instructions() {
    return(
        <div className="instructions">
            <img alt="" src={emoji} />
            <p>Click on an emoji to view the emoji short name.</p>
        </div>
    )
}
