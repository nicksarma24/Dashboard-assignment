import React from "react";
import logo from "../../assets/logo.svg";
import dashboardIcon from "../../assets/ic_dashboard.svg";
import recruitmentIcon from "../../assets/ic_recruitment.svg";
import calenderIcon from "../../assets/ic_calendar.svg";
import employeeIcon from "../../assets/ic_employee.svg";
import departmentIcon from "../../assets/ic_department.svg";
import settingsIcon from "../../assets/ic_settings.svg";
import supportIcon from "../../assets/ic_support.svg";
import logoLg from "../../assets/logo-lg.png";

const SideNavBar = ({ isMenuOpen }) => {
  return (
    <div
      className={`sticky top-0 md:w-[90px] lg:w-[242px] h-screen bg-[#FAFAFA] transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
      style={{ zIndex: 50 }} // Ensures it stays above other content
    >
      <div className="h-full flex flex-col items-center">
        <img className="my-[20px] hidden md:block lg:hidden" src={logo} alt="Logo" />
        <img className="my-[20px] hidden lg:block" src={logoLg} alt="Logo" />
        <div className="font-roboto text-[#686868] opacity-60 text-[10px] py-[20px] lg:text-left lg:w-full lg:px-10">
          MAIN MENU
        </div>
        <div className="flex items-start flex-col space-y-[36px]">
          <div className="flex items-start space-x-[24px]">
            <img src={dashboardIcon} alt="Dashboard" />
            <span className="text-[#FF5151] hidden lg:block">Dashboard</span>
          </div>
          <div className="flex items-center space-x-[24px]">
            <img src={recruitmentIcon} alt="Recruitment" />
            <span className="text-[16px] text-[#686868] hidden lg:block">Recruitment</span>
          </div>
          <div className="flex items-center space-x-[24px]">
            <img src={calenderIcon} alt="Calender" />
            <span className="text-[16px] text-[#686868] hidden lg:block">Calender</span>
          </div>
          <div className="flex items-center space-x-[24px]">
            <img src={employeeIcon} alt="Employee" />
            <span className="text-[16px] text-[#686868] hidden lg:block">Employee</span>
          </div>
          <div className="flex items-center space-x-[24px]">
            <img src={departmentIcon} alt="Department" />
            <span className="text-[16px] text-[#686868] hidden lg:block">Department</span>
          </div>
        </div>
        <div className="font-roboto text-[#686868] opacity-60 text-[10px] py-[20px] lg:text-left lg:w-full lg:px-10">
          OTHER
        </div>
        <div className="flex items-start flex-col space-y-[36px]">
          <div className="flex items-center space-x-[24px]">
            <img src={supportIcon} alt="Support" />
            <span className="text-[16px] text-[#686868] hidden lg:block">Support</span>
          </div>
          <div className="flex items-center space-x-[24px]">
            <img src={settingsIcon} alt="Settings" />
            <span className="text-[16px] text-[#686868] hidden lg:block">Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
