import React from 'react'

const Item = () => {
  return (
    <>
      <div class="flex gap-4 justify-center mt-[60px]">
       <div class="flex gap-1">
        <img class="w-5 h-6" src="assets/Frame 113.png" alt=""/>
        <p>Record</p>
      </div>
      <div class="flex gap-1">
        <img class="w-5 h-6" src="assets/photo_camera.png" alt=""/>
        <p>Capture</p> 
      </div>
      <div class="flex gap-1">
        <img class="w-5 h-6" src="assets/view_in_ar.png" alt=""/>
        <p>AR View</p> 
      </div> 
    </div>
    </>
  )
}

export default Item
