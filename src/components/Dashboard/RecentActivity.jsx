import React from "react";

const RecentActivity = () => {
  return (
    <div className="text-white md:max-w-[50%] lg:max-w-[500px] h-full  ml-[20px]">
      <div className="bg-[#161E54] rounded-[10px]">
        <div className="bg-[#1B204A] w-full rounded-t-[10px] px-[10px] py-[16px]">
          Recent Activity
        </div>
        <div className="p-[20px] space-y-[7px]">
          <div className="text-[10px] opacity-60">
            10.40 AM, Fri 10 Sept 2021
          </div>
          <div className="text-[16px]">You Posted a New Job</div>
          <div className="text-[14px] opacity-80">
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </div>
          <div className="text-[14px] pt-[21px] pb-[11px]">
            Today you made 12 Activity
          </div>
          <button className="bg-[#FF5151] w-[146px] h-[38px] rounded-[4px]">
            See Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
