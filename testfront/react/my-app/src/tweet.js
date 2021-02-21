import React from 'react'
import './App.css';

function tweet(pawan){
    return(
        <div className="tweet">
            <h3>{pawan.photo}</h3>
            <h3>{pawan.caption}</h3>
            <h3>{pawan.likes}</h3>
        </div>

    )
}

export default tweet

