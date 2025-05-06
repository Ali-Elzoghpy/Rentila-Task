import React from "react";
import not from "../../../assets/error.svg"
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      {" "}
      <div className="h-screen flex flex-col items-center justify-center ">
        {" "}
        <img src={not} className="w-6/12" alt="" />
        <div>
          {" "}
          <Link to="/landlord" className="text-mainColor">
            {" "}
            back to home..?{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
