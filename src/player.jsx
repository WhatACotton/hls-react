
import ReactPlayer from "react-player";
import React, { useState } from 'react'

export default function VideoPlayer(data) {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.9)
  const [mute, setMute] = useState(false)
  const [pip, setPip] = useState(false)
  return (
    <>
    <ReactPlayer
            url={data.videoSrc}
            className='react-player'
            autoPlay
            playing={playing}
            volume={volume}
            muted={mute}
            pip={pip}
            width='100%'
            height='100%'
            onEnablePIP={()=>{setPip(true)}}
            onDisablePIP={()=>{setPip(false)}}
          />
          <button onClick={() => 
          {
            setPlaying(!playing)
          }
          }>
            {playing ? '■' : '▶'}
          </button>
          <div>
            <input type="range" id="volume" name="volume" min="0" max="1" step={0.1} defaultValue={0.9} onChange={(e)=>{
              setVolume(e.target.value)
            }}/>
            <label for="volume">Volume</label>
          </div>
          <button onClick={() => 
          {
            setMute(!mute)
          }
          }>
            {mute ? 'unmute' : 'mute'}
          </button>
          <button onClick={() => 
          {
            setPip(!pip)
          }
          }>
            {pip ? 'unpip' : 'pip'}
          </button>

          </>
  )
}