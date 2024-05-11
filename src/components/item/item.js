import React from 'react'
import {ReactMediaRecorder} from 'react-media-recorder-2'
const Item = () => {
  return (
    <>
     <ReactMediaRecorder 
     
     screen
     render={({status,startRecording,stopRecording,mediaBlobUrl}) =>(
      <div>
        <div className='ml-[500px] absolute top-[px]'>
        <video src={mediaBlobUrl} autoPlay loop controls></video>
      </div>
        <div class="flex gap-4 justify-center mt-[60px]">
        
       <div class="flex gap-1">
        <img class="w-5 h-6" src="assets/Frame 113.png" alt=""/>
        <button onClick={startRecording} >Record</button>
      </div>
      <div class="flex gap-1">
        <img class="w-5 h-6" src="assets/Frame 113.png" alt=""/>
        <button onClick={stopRecording} >Stop record</button> 
      </div>

      </div>
      </div>
      )}
     />
     
    </>
  )
}

export default Item
