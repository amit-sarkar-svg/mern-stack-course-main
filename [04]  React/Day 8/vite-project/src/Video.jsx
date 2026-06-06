import { useRef } from "react";

function Video() {

    const videoRef = useRef(null)

  return (
    <>
      <video ref={videoRef} src="/break.mp4" width="600" height="600"></video>
      <div>
        <button onClick={()=> videoRef.current.play() } >Start</button>
        <button onClick={()=> videoRef.current.pause()} >Pause</button>
        <button onClick={()=> videoRef.current.currentTime =0} >Restart</button>
        <button onClick={()=> videoRef.current.currentTime +=10}>seekforward</button>
      </div>
    </>
  );
}

export default Video;
