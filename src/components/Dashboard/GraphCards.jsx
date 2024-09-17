import React from 'react'
import graph1 from "../../assets/Group 4.png"
import graph2 from "../../assets/Group 5.png"
const GraphCards = () => {
  return (
    <div className='flex flex-col space-y-[16px] md:flex-row md:space-x-[16px]'>
      <div className='-ml-[16px] -mt-[16px]'></div>
         <div className="flex justify-between border-[1px] border-[#E0E0E0] rounded-[10px] p-[20px] w-full">
          <div>
            <div className="font-medium text-[14px] text-[#161E54]">
              Total Employees
            </div>
            <div className="font-medium text-[32px] text-[#161E54] my-[20px]">216</div>
            <div>
                <div className="font-roboto text-[10px] text-[#686868]">120 men</div>
                <div className="font-roboto text-[10px] text-[#686868]">96 women</div>
            </div>
          </div>
          <div>
            <img className="mt-4" src={graph1} alt="" />
            <div className="bg-[#FFEFE7] font-roboto text-[10px] text-[#686868] rounded-[4px] p-[3px] text-right w-fit ml-3 mt-">+2% Past month</div>
          </div>
        </div>
        <div className="flex justify-between border-[1px] border-[#E0E0E0] rounded-[10px] p-[20px] w-full">
          <div>
            <div className="font-medium text-[14px] text-[#161E54]">
              Talent Request
            </div>
            <div className="font-medium text-[32px] text-[#161E54] my-[20px]">16</div>
            <div>
                <div className="font-roboto text-[10px] text-[#686868]">6 men</div>
                <div className="font-roboto text-[10px] text-[#686868]">10 women</div>
            </div>
          </div>
          <div>
            <img className="mt-4" src={graph2} alt="" />
            <div className="bg-[#FFEFE7] font-roboto text-[10px] text-[#686868] rounded-[4px] p-[3px] text-right w-fit ml-3 mt-">+5% Past month</div>
          </div>
        </div>
    </div>
  )
}

export default GraphCards