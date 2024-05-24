
import ReactPlayer from "react-player";
export default function VideoPlayer(data) {

console.log(data.videoSrc)
  
  return (
    <ReactPlayer
            url={data.videoSrc}
            className='react-player'
            controls
            width='100%'
            height='100%'
          />
  )
}