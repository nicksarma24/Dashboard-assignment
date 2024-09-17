import React from 'react'

const ColoredCards = () => {
  return (
    <div className='flex flex-col space-y-[16px] md:flex-row md:space-x-[14px] w-full'>
      <div className='md:-ml-[14px]'></div>
        <div className="bg-[#FFEFE7] rounded-[10px] w-full">
          <div className="pl-[20px] py-[16px]">
            <div className="font-medium text-[14px] text-[#161E54]">
              Available Position
            </div>
            <div className="font-medium text-[32px] text-[#161E54]">24</div>
            <div className="font-roboto text-[12px] text-[#FF5151] font-normal">
              4 Urgently needed
            </div>
          </div>
        </div>
        <div className="bg-[#E8F0FB] rounded-[10px] w-full">
          <div className="pl-[20px] py-[16px]">
            <div className="font-medium text-[14px] text-[#161E54]">
              Job Open
            </div>
            <div className="font-medium text-[32px] text-[#161E54]">10</div>
            <div className="font-roboto text-[12px] text-[#3786F1] font-normal">
              4 Active hiring
            </div>
          </div>
        </div>
        <div className="bg-[#FDEBF9] rounded-[10px] w-full">
          <div className="pl-[20px] py-[16px]">
            <div className="font-medium text-[14px] text-[#161E54]">
              New Employees
            </div>
            <div className="font-medium text-[32px] text-[#161E54]">24</div>
            <div className="font-roboto text-[12px] text-[#EE61CF] font-normal">
              4 Department
            </div>
          </div>
        </div>
    </div>
  )
}

export default ColoredCards