import React from 'react'

const Sidebar = () => {
  return (
    <aside className="text-white w-[50] h-full flex flex-col " >
     <div className="inline-block">
      <ul className="flex flex-col gap-4 p-4 space-y-2">
        <li>
          <p className="text-blue-700 text-xl font-normal font-family: 'Satoshi', sans-serif;">P<span className="text-black">SE</span></p>
        </li>
        <li>
          <img className="h-[16.67px] w-[16.67px] ml-1" src="assets/medical_services.png" alt="img"/>
        </li>
        <li>
          <img className="h-[18.33px] w-[18.33px] ml-1" src="assets/eye_tracking.png" alt="img"/>
        </li>
        <li>
          <img className="h-[16.67px] w-[16.67px] ml-1" src="assets/view_in_ar.png" alt="img"/>
        </li>
        <li>
          <img className="h-[18.33px] w-[18.33px] ml-1" src="assets/local_shipping.png" alt="img"/>
        </li>
      </ul>
    </div>
    <div className="mt-28" >
      <ul className="flex flex-col gap-4 p-4 space-y-2">
        <li>
          <img className="h-[10px] w-[18.33px] ml-1" src="assets/medical_services.png" alt="img"/>
        </li>
        <li>
          <img className="h-[14.47px] w-[15.83px] ml-1" src="assets/person_edit.png" alt="img"/>
        </li>
        <li>
          <img className="h-[15px] w-[15px] ml-1" src="assets/logout.png" alt="img"/>
        </li>
        <li>
          <img className="h-[20px] w-[11.78px] ml-1" src="assets/arrow_forward_ios.png" alt="img"/>
        </li>
      </ul>

    </div> 
    </aside>    
  )
}

export default Sidebar
