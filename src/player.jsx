
import ReactPlayer from "react-player";
import React, { useState } from 'react'

export default function VideoPlayer(data) {
console.log(data.videoSrc)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.9)

  return (
    <>
    <ReactPlayer
            url={data.videoSrc}
            className='react-player'
            autoPlay
            playing={playing}
            volume={volume}
            width='100%'
            height='100%'
          />
          <button onClick={() => 
          {
            setPlaying(!playing)
            console.log(playing)
          }
          }>
            {playing ? '■' : '▶'}
          </button>
          <div>
            <input type="range" id="volume" name="volume" min="0" max="1" step={0.1} onChange={(e)=>{
              setVolume(e.target.value)
            }}/>
            <label for="volume">Volume</label>
          </div>
          </>
  )
}