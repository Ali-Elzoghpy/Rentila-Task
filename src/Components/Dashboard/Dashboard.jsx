import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import headerImg from "../../assets/tour_people.png";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dashboard() {
  const [userDetails, setUserDetails] = useState({});
  let { state } = useLocation();
  useEffect(() => {
    setUserDetails(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  useEffect(() => {
    toast.success(state);
  }, [state]);

  console.log(userDetails);

  return (
    <>
      <Helmet>
        <title> Rentila - Hello {`${userDetails?.name}`} </title>
      </Helmet>

      <div className="container w-[97%] mx-auto ">
        <header className="my-6">
          <h1 className="md:text-2xl font-semibold text-lg text-[#555]">
            Hello {userDetails.name} !{" "}
          </h1>
        </header>
        <main className="  border rounded  ">
          <div className="header-img text-center p-7  ">
            <img
              src={headerImg}
              className=" md:w-[45%] block mx-auto w-[100%]  "
              alt="rentila"
            />
            <p className=" xs:text-sm md:text-xl my-4">
              Thank you for signing up! We are happy to have you on board!
              Please complete your profile.
            </p>
            <div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "45%" }}
                />
                <div className="mt-2 ">Your profile is almost ready 50%</div>
              </div>
            </div>
          </div>

          <div className="user-Details">
            <h1 className="bg-[#FCFCFC] p-3 py-5">Personal Details</h1>
            <div className="row  justify-around p-5 gap-4  ">
              <div className="w-full md:w-[30%] ">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    value={userDetails?.name}
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-[30%] ">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    value={userDetails?.email}
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-[30%] ">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    value={userDetails?.phone}
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
              <div className="w-full md:w-[30%] ">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    country
                  </label>
                  <input
                    type="text"
                    value={userDetails?.country}
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
