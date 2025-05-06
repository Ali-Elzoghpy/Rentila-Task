import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/unnamed.png";
import { initFlowbite } from "flowbite";
export default function SideBar() {
  const [sidBarCollaps, setSidBarCollaps] = useState(true);
  let navigate = useNavigate();

  console.log("render");
  useEffect(() => {
    initFlowbite();
  }, []);
  function changeCollaps() {
    setSidBarCollaps(!sidBarCollaps);
  }

  function changeToggle() {
    document.querySelector("html").classList.toggle(`dark`);
  }
  function logOut() {
    localStorage.removeItem("userInfo");
    navigate("/");
  }
  return (
    <div className="sidBar-container">
      <Sidebar collapsed={sidBarCollaps} className="border-0">
        <Menu>
          <MenuItem
            id="handelPading"
            className={sidBarCollaps ? ` logo p-0` : ` logo p-10`}
            onClick={changeCollaps}
            icon={<img src={logo} className="w-logo   rounded-lg " alt="" />}
          >
            {" "}
          </MenuItem>
          <MenuItem
            className="text-[#555] mt-5  dark:!text-[#f1f1f1]  group  dark:!  "
            icon={
              <label className="inline-flex items-center cursor-pointer">
                <input
                  id="toggle"
                  onChange={changeToggle}
                  type="checkbox"
                  defaultValue
                  className="sr-only peer"
                />
                <div className="relative w-11  h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-mainColor dark:peer-focus:ring-green-700 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#555] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-white " />
              </label>
            }
          >
            Dark mode
          </MenuItem>

          <MenuItem
            className="text-[#555] dark:!text-[#f1f1f1] mt-5 group "
            component={<NavLink to="/landlord" />}
            icon={
              <i className="fa-solid fa-desktop dark:!text-[#f1f1f1] group-hover:text-white text-[#555]"></i>
            }
          >
            Dashboard
          </MenuItem>
          <MenuItem
            className="text-[#555] dark:!text-[#f1f1f1] mb-2 group "
            component={<NavLink to="properties" />}
            icon={
              <i className="fa-solid fa-house  group-hover:text-white dark:!text-[#f1f1f1] text-[#555]"></i>
            }
          >
            Properties
          </MenuItem>
          <MenuItem
            className="text-[#555] dark:!text-[#f1f1f1] mb-10 group "
            component={<NavLink to="tenants" />}
            icon={
              <i className="fa-solid fa-users dark:!text-[#f1f1f1] group-hover:text-white text-[#555]"></i>
            }
          >
            Tenants
          </MenuItem>
          <MenuItem
            onClick={logOut}
            className="text-[#555] dark:!text-[#f1f1f1] mb-2 group "
            icon={
              <i className="fa-solid fa-right-from-bracket dark:!text-[#f1f1f1] group-hover:text-white text-[#555]"></i>
            }
          >
            Log out
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
