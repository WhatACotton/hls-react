
import ReactPlayer from "react-player";
import React, { useState } from 'react'

export default function VideoPlayer(data) {
console.log(data.videoSrc)
  const [playing, setPlaying] = useState(true)
  return (
    <>
    <ReactPlayer
            url={data.videoSrc}
            className='react-player'
            autoPlay
            playing={playing}
            width='100%'
            height='100%'
          />
          <button onClick={() => 
          {
            setPlaying(!playing)
            console.log(playing)
          }
          }>
            {playing ? 'Pause' : 'Play'}
          </button>
          </>
  )
}