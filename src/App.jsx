import React from 'react';
import Player from './player';

export default function App() {
  return (
    <div>
      <h1>React HLS Player</h1>
    
      <Player videoSrc="https://agcdn02.cdnext.stream.ne.jp/hls2/basic/data/prog_index.m3u8" />
    </div>
  );
}