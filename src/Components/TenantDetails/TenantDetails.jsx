import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./../Shared/Loader/Loader";
import { useState } from "react";
import { privateApiInstance } from "./../../services/api/apiInstance";
import { Tenants_EndPoints } from "./../../services/api/apiConfig";
import { toast } from "react-toastify";

export default function TenantDetails() {
  let [Load, setLoad] = useState(false);
  let [getTenantDetails, setTenantDetails] = useState(null);

  let { id } = useParams();
  useEffect(() => {
    getDetails(id);
  }, [id]);

  function getDetails(id) {
    setLoad(true)
    privateApiInstance
      .get(Tenants_EndPoints.getTenantDetails(id))
      .then((res) => {
        console.log(res.data);
        setTenantDetails(res?.data);
        setLoad(false)

      })
      .catch((err) => {
        toast.error(err.message)
      }).finally(()=>{
        setLoad(false)

      })
  }

  return (
    <>
      <div className="container  w-[90%] md:w-[80%]  mx-auto">
        {Load ? (
          <Loader />
        ) : (
          <>
            {" "}
            <div className="relative   mt-10 p-10  bg-white overflow-x-auto shadow-md rounded-lg">
              <table className="w-full text-sm text-center rtl:text-right  ">
                <thead className="text-xs   border-b-2 border-opacity-10  border-black">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3   text-center  text-[16px]"
                    >
                      tenants name{" "}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3   font-[800px]  text-center text-[16px]"
                    >
                      age
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 font-bold  text-center text-[16px]"
                    >
                      job{" "}
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-bold  text-center text-[16px]"
                    >
                      Payment status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-bold  text-center text-[16px]"
                    >
                      start Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-bold  text-center text-[16px]"
                    >
                      end Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-bold  text-center text-[16px]"
                    >
                      maritalStatus{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b  border-gray-200 hover:bg-gray-50 ">
                    <th
                      scope="row"
                      className="  
                    text-center  whitespace-nowrap "
                    >
                      {getTenantDetails?.name}
                    </th>
                    <td
                      className="  text-md  font-[50px] bg-[
                    RGB(255, 255, 255)]  "
                    >
                      {getTenantDetails?.age}
                    </td>
                    <td
                      className="  font-[100px] bg-[
                    RGB(255, 255, 255)]"
                    >
                      <div className="flex flex-col">
                        <div className="mb-2">
                          <span>{getTenantDetails?.job}</span>{" "}
                        </div>
                      </div>
                    </td>
                    <td
                      className="px-6 py-4    font-[100px] bg-[
                    RGB(255, 255, 255)]"
                    >
                      <div className="flex flex-col">
                        <div className="mb-2">
                          {getTenantDetails?.rentStatus == "Paid" ? (
                            <span className="bg-green-800  p-1 px-2 rounded-lg  text-white">
                              {" "}
                              {getTenantDetails?.rentStatus}{" "}
                            </span>
                          ) : (
                            <span className="bg-red-600 p-1 px-2 rounded-lg text-white ">
                              {" "}
                              {getTenantDetails?.rentStatus}{" "}
                            </span>
                          )}{" "}
                        </div>
                      </div>
                    </td>
                    <td
                      className="px-6 py-4   font-[100px] bg-[
                    RGB(255, 255, 255)]"
                    >
                      <div className="flex flex-col">
                        <div className="mb-2">
                          <span>{getTenantDetails?.leaseEnd}</span>{" "}
                        </div>
                      </div>
                    </td>
                    <td
                      className="px-6 py-4   font-[100px] bg-[
                    RGB(255, 255, 255)]"
                    >
                      <div className="flex flex-col">
                        <div className="mb-2">
                          <span>{getTenantDetails?.leaseStart}</span>{" "}
                        </div>
                      </div>
                    </td>
                    <td
                      className="px-6 py-4   font-[100px] bg-[
                    RGB(255, 255, 255)]"
                    >
                      <div className="flex flex-col">
                        <div className="mb-2">
                          <span>{getTenantDetails?.maritalStatus}</span>{" "}
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
}
