import React, { useEffect, useState } from "react";
import Loader from "../Shared/Loader/Loader";
import { privateApiInstance } from "../../services/api/apiInstance";
import {
  Tenants_EndPoints,
  pagination_EndPoints,
} from "../../services/api/apiConfig";
import { toast } from "react-toastify";
import Modal from "../Shared/Modal/Modal";
import Pagination from "../Shared/Pagination/Pagination";
import ActionBtn from "./../Shared/ActionBtn/ActionBtn";
import { initFlowbite } from "flowbite";

export default function Tenant() {
  const [getData, setGetData] = useState(null);
  const [getPageNumber, setPageNumber] = useState(1);
  const [CurntPage, setCurrentPage] = useState(1);
  const [Load, setLoad] = useState(true);
  const [getId, setGetId] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [getPagination, setGetPagination] = useState(null);

  useEffect(() => {
    initFlowbite();
    getTenants(getPageNumber);
    paginationData();
  }, []);

  function getTenants(pageNum = 1) {
    setLoad(true);
    privateApiInstance
      .get(Tenants_EndPoints.getAllTenants(pageNum))
      .then((res) => {
        setGetData(res?.data);
        setPageNumber(pageNum);
        setCurrentPage(pageNum);
        setLoad(false);
      })
      .catch((err) => {
        toast.error(err?.message);
        setLoad(false);
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
      getTenants(prev);
    }
  }

  function nextPage() {
    if (getPageNumber < getPagination?.totalPages) {
      const next = getPageNumber + 1;
      setPageNumber(next);
      setCurrentPage(next);
      getTenants(next);
    }
  }

  function getIds(id) {
    setGetId(id);
  }

  function closeModal() {
    setOpenModal(false);
  }
  function handelShow() {
    setOpenModal(true);
  }
  function handlePageClick(pageNum) {
    console.log(pageNum);
    setCurrentPage(pageNum);
    getTenants(pageNum);
  }

  return (
    <>
      <div
        onMouseEnter={() => initFlowbite()}
        className="container w-full md:w-[90%] lg:w-[80%] mx-auto px-2 sm:px-4"
      >
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
                    <th className="px-4 py-3">#</th>
                    <th className="px-4 py-3">Tenant Name</th>
                    <th className="px-4 py-3">Job</th>
                    <th className="px-4 py-3">Payment</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {getData?.map((data) => {
                    let { id, name, job, rentStatus } = data;
                    return (
                      <tr
                        key={id}
                        className="bg-white border-b border-gray-200 hover:bg-gray-50"
                      >
                        <td className="px-4 py-3">{id}</td>
                        <td className="px-4 py-3">
                          {name.split(" ").slice(0, 2).join(" ")}
                        </td>
                        <td className="px-4 py-3">
                          {job.split(" ").slice(0, 2).join(" ")}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-xs md:text-sm p-1 px-2 rounded-lg text-white ${
                              rentStatus === "Paid"
                                ? "bg-green-800"
                                : "bg-red-600"
                            }`}
                          >
                            {rentStatus}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            onClick={() => getIds(id)}
                            className="cursor-pointer"
                          >
                            <ActionBtn opneModal={handelShow} id={id} />
                          </span>
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
            <Modal
              reFetch={getTenants}
              editId={getId}
              closeMod={closeModal}
              onOpen={openModal}
            />
          </div>
        )}
      </div>
    </>
  );
}
