import React from 'react'
import Sidebar from '../sidebar/sidebar'

const Navbar = () => {
  return (
    <>
    <div className='flex flex-row relative'> 
      <Sidebar/>
    <div class="flex-1 p-6 ">
      <div class="flex justify-between ">
         <div class="flex gap-4 shadow-2xl p-1">
          <p class="text-blue-700 text-xl font-family: 'Satoshi', sans-serif leading-6 font-medium ">Surgi<spam class="text-black font-family: 'Satoshi', sans-serif;">Plan</spam></p>
          <p class="text-gray-400 ">|</p>
          <p class="text-xl font-normal leading-6">Filename</p>
          <p class="text-gray-400">|</p>
          <img class="w-[20px] h-[22px] mt-1" src="assets/deployed_code_history.png" alt=""/>
          <img class="w-[18px] h-[18px] mt-1" src="assets/save.png" alt=""/>
          <img class="w-[16px] h-[16px] mt-1" src="assets/download.png" alt=""/>
          <img class="w-[20px] h-[20px] mt-1" src="assets/help.png" alt=""/>
        </div> 
        
        <div class="flex">
        <div class="flex gap-4 shadow-2xl p-1">
          <img class="h-[20px] w-[20px] mt-1" src="assets/chat (1).png" alt=""/>
          <img class="w-[24px] h-[16px] mt-1" src="assets/video_call.png" alt=""/>
          <img class="w-[24px] h-[16px] mt-1" src="assets/group_add.png" alt=""/>
          <p class="-ml-3">share</p>
          <div class="flex">
            <img class="w-6 h-6" src="https://img.icons8.com/ios-glyphs/30/FAB005/user-male-circle.png"alt="user-male-circle"/>
            <img class="w-6 h-6" src="https://img.icons8.com/ios-glyphs/30/40C057/user-male-circle.png"alt="user-male-circle" />
            <img class="w-6 h-6" src="https://img.icons8.com/ios-glyphs/30/FA5252/user-male-circle.png"alt="user-male-circle"/>
          </div>
        </div>      
        <div class="px-2 bg-[#598BE4] ml-5 border-none rounded-sm flex gap-2 w-[80px]">
          <button class="text-white">Order</button>
          <img class="w-3 h-2 mt-4" src="assets/expand_more.png" alt=""/>
          </div>
        </div>
      </div> 
      </div>
      </div>
      </>
  )
}
export default Navbar
