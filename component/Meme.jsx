import React from "react";
import memeData from "../src/memeData"

export default function Meme() {

  function handleOnClick() {
    const random = Math.floor(Math.random() * 100) + 1
    console.log(memeData.data.memes.at(random).url);
  }

  return (
    <main>
      <div action="" className="form">

        <input
          type="text"
          className="form--input"
          placeholder="Top Text" />

        <input
          type="text"
          className="form--input"
          placeholder=" Bottom Text" />

        <button className="form--button" onClick={handleOnClick}> Get A New Image</button>
      </div>
    </main>
  )
}

