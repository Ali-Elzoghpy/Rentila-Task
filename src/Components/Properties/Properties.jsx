import React, { useEffect, useState } from "react";
import { privateApiInstance } from "../../services/api/apiInstance";
import {
  pagination_EndPoints,
  Properties_EndPoints,
} from "../../services/api/apiConfig";
import { toast } from "react-toastify";
import Loader from "../Shared/Loader/Loader";
import Pagination from "../Shared/Pagination/Pagination";

export default function Properties() {
  const [getData, setGetData] = useState(null);
  let [getPageNumber, setPageNumber] = useState(1);
  const [getPagination, setGetPagination] = useState(null);
  let [CurntPage, setCurrentPage] = useState(1);
  let [Load, setLoad] = useState(true);
  useEffect(() => {
    getPropertie(getPageNumber);
    paginationData();
  }, []);
  function getPropertie(pageNum = 1) {
    setLoad(true);
    privateApiInstance
      .get(Properties_EndPoints.getAllProperties(pageNum))
      .then((res) => {
        setGetData(res?.data);
        setLoad(false);
      })
      .catch((err) => {
        toast.error(err?.message);
      });
  }

  function paginationData() {
    privateApiInstance
      .get(pagination_EndPoints.getPagination)
      .then((res) => {
        setGetPagination(res?.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function prevPage() {
    if (getPageNumber > 1) {
      const prev = getPageNumber - 1;
      setPageNumber(prev);
      setCurrentPage(prev);
      getPropertie(prev);
    }
  }
  function nextPage() {
    if (getPageNumber < getPagination?.totalPages) {
      const next = getPageNumber + 1;
      console.log(next);
      setPageNumber(next);
      setCurrentPage(next);
      getPropertie(next);
    }
  }
  function handlePageClick(pageNum) {
    console.log(pageNum);
    setCurrentPage(pageNum);
    getPropertie(pageNum);
  }

  return (
    <>
      <div className="container w-full md:w-[90%] lg:w-[80%] mx-auto px-2 sm:px-4">
        {Load ? (
          <Loader />
        ) : (
          <div className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 p-4 sm:p-6 md:p-8 lg:p-10 bg-white dark:bg-[#bbbbbb] overflow-x-auto shadow-md rounded-lg">
            <div
              className={
                getData.length < 6
                  ? `  h-screen min-w-[600px] md:min-w-0 `
                  : `min-w-[600px] md:min-w-0`
              }
            >
              <table className="w-full text-xs sm:text-sm md:text-base text-center rtl:text-right">
                <thead className="border-b-2 border-opacity-10 border-black">
                  <tr>
                    <th
                      scope="col"
                      className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 font-semibold"
                    >
                      Properties name
                    </th>
                    <th
                      scope="col"
                      className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 font-semibold"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 font-semibold"
                    >
                      Rent Amount
                    </th>
                    <th
                      scope="col"
                      className="px-2 sm:px-3 md:px-4 lg:px-6 py-2 sm:py-3 font-semibold"
                    >
                      Tenants
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getData?.map((data) => {
                    let { id, name, address, rentAmount, tenants } = data;
                    return (
                      <tr
                        key={id}
                        className="bg-white border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4">
                          {id}
                        </td>
                        <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4">
                          {name}
                        </td>
                        <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4 max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-none truncate">
                          {address}
                        </td>
                        <td className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4">
                          {rentAmount}
                        </td>
                        <td
                          oncl
                          className="px-2 sm:px-3 md:px-4 lg:px-6 py-3 sm:py-4"
                        >
                          {tenants.length}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <Pagination
                next={nextPage}
                prev={prevPage}
                CurntPag={CurntPage}
                NumberOfPages={getPagination?.totalPages}
                handlePageClick={handlePageClick}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
