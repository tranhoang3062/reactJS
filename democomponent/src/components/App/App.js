import React from 'react';

import Instructions from '../Instructions/Instructions.js';

import './App'

const displayEmojiName = event => alert(event.target.id);
const emojis = [
    {
        emoji: ':)',
        name: "smile face"
    },
    {
        emoji: ':(',
        name: "sad face"
    }
];

function App() {
    const greeting = "greeting";
    const displayAction = false;
    return(
        <div className="container">
            <h1 id = {greeting}>Hello World!</h1>
            { displayAction && <p>I am writing JSX</p> }
            <Instructions />
            <ul>
                {
                    emojis.map(emoji => (
                        <li key = {emoji.name}>
                            <button
                                onClick = {displayEmojiName} >
                                <span role = "img" aria-label = {emoji.name} id = {emoji.name}>{emoji.emoji}</span> 
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App;

