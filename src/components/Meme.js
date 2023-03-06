import React from "react";
// import MemeData from "./MemeData";

export default function Meme(){
       

        const [meme, setMeme] = React.useState({
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        })

        const [allMemeImages, setAllMemeImages] = React.useState([])

        React.useEffect(() => {
            fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
        })

        function showMeme() {
            let url
            // const memeArr = allMemeImages.data.memes
            const random = Math.floor(Math.random() * allMemeImages.length ) +1
            url = allMemeImages[random].url
            setMeme(prevMeme => ({...prevMeme, randomImage: url}))
        }
        
        function handleChange (event) {
            const {name, value} = event.target
            setMeme(prevMeme => ({
                ...prevMeme, 
                [name]: value
            }))
        }
    return(
        <main>
            <div className="form">
                <input className="formInput" 
                type="text"
                placeholder="Top text" 
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input className="formInput" 
                type="text" 
                placeholder="Bottom text" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
               <button onClick={showMeme} className="formButton">Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}