import React, { useState } from "react";

import ColoredCards from "./ColoredCards";
import GraphCards from "./GraphCards";
import Announcement from "./Announcement";
import RecentActivity from "./RecentActivity";
import UpcomingSchedule from "./UpcomingSchedule";
import SideNavBar from "../Navbar/SideNavBar";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex h-screen w-full">
      {/* SideNavBar */}
      <SideNavBar isMenuOpen={isMenuOpen} />

      {/* Main content */}
      <div className="w-full">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="px-[20px] md:px-[54px] font-poppins">
          <div className="mt-[10px]">
            <div className="font-poppins text-[#161E54] font-medium text-[20px] py-[10px]">
              Dashboard
            </div>
          </div>
          <div className="lg:flex w-full lg:justify-between">
          <div className="flex flex-col lg:flex space-y-[16px]">
            <ColoredCards />
            <GraphCards />
            <Announcement />
          </div>
            <div className="md:flex md:space-x-[16px] lg:flex-col lg:space-y-[16px] mt-[16px]">
              <RecentActivity />
              <UpcomingSchedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
