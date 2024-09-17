import React from "react";
import pin from "../../assets/pin.svg";
import menuDots from "../../assets/menu-dots.svg";
const Announcement = () => {
  const today = new Date();
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  return (
    <div>
      <div className="relative flex flex-col space-y-[8px] border-[1px] border-[#E0E0E0] rounded-[10px] p-[20px]">
        <div className="flex justify-between items-center w-full">
          <div className="font-semibold text-[16px] text-[#161E54]">
            Announcement
          </div>
          <div className="border-[1px] border-[#EFEFEF] rounded-[4px] p-[6px]">
            <div className="flex space-x-2 items-center text-[#686868] text-[10px]">
              <div>Today, {formattedDate}</div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-[8px]">
          <div className="border-[0.5px] bg-[#FAFAFA] mt-[8px] rounded-[6px] px-2">
            <div className="text-[14px] py-[5px] font-light">
              Outing schedule for every department
            </div>
            <div className="py-2 flex justify-between">
              <div className="text-[#686868] text-[10px]">5 Minutes ago</div>
              <div className="flex space-x-[10px]">
                <img src={pin} alt="" />
                <img src={menuDots} alt="" />
              </div>
            </div>
          </div>
          <div className="border-[0.5px] bg-[#FAFAFA] mt-[8px] rounded-[6px] px-2">
            <div className="text-[14px] py-[5px] font-light">
              Meeting HR Department
            </div>
            <div className="py-2 flex justify-between">
              <div className="text-[#686868] text-[10px]">
                Yesterday, 12:30 PM
              </div>
              <div className="flex space-x-[10px]">
                <img src={pin} alt="" />
                <img src={menuDots} alt="" />
              </div>
            </div>
          </div>
          <div className="border-[0.5px] bg-[#FAFAFA] mt-[8px] rounded-[6px] px-2">
            <div className="text-[14px] py-[5px] font-light">
              IT Department need two more talents for UX/UI Designer position
            </div>
            <div className="py-2 flex justify-between">
              <div className="text-[#686868] text-[10px]">
                Yesterday, 09:15 AM
              </div>
              <div className="flex space-x-[10px]">
                <img src={pin} alt="" />
                <img src={menuDots} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-0 w-[calc(100%+40px)] h-[1px] bg-[#E0E0E0] transform -translate-x-[20px]"></div>
        </div>
        <div className="text-[#FF5151] text-center pt-[10px]">See All Announcements</div>
      </div>
    </div>
  );
};

export default Announcement;
