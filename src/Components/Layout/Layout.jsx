import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./../Shared/SideBar/SideBar";

export default function Layout() {
  return (
    <>
      <div className="flex ">
        <div
          className="!bg-[#eeeeee]  dark:!bg-[#888] "
        >
          {" "}
          <SideBar />
        </div>{" "}
        <div className="w-full ">
          <div>
            <nav className="bg-[#FCF8E3]  dark:bg-[#3a3a2f] text-center flex flex-wrap justify-center py-3 items-center">
              <i className="fa-solid fa-star  text-[#FF9900] dark:text-white hidden md:block "></i>{" "}
              <p className="ms-1 dark:text-white">
                Need an unlimited account?{" "}
                <span className="bg-mainColor  px-[2px] rounded-xl md:text-xs  xs:text-[9px] text-white">
                  Get a Premium account
                </span>{" "}
              </p>
            </nav>
            <Outlet />
          </div>
        </div>
      </div>{" "}
    </>
  );
}
