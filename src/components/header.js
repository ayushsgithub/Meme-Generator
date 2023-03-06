import React from "react";
import troll from "../imgs/meme.png"

export default  function Header (){
    return(
        <div>
            <header className="header">
                <img className="troll" src={troll} alt="meme" />
                <h2 className="headerTitle">Meme Generator</h2>
                <h4 className="headerProject">React Course - Project 3</h4>
            </header>
        </div>
    )
}