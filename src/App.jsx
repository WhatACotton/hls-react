import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

export default function App() {
  window.Hls = "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.12.4/hls.js";
  return (
    <div>
      <h1>React HLS Player</h1>
      <ReactHlsPlayer
        src="https://agcdn02.cdnext.stream.ne.jp/hls2/basic/data/prog_index.m3u8"
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </div>
  );
}