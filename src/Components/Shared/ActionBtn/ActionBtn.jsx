import React from "react";
import { Link } from "react-router-dom";

export default function ActionBtn({ id, opneModal }) {
  return (
    <>
      <i
        id="multiLevelDropdownButton"
        data-dropdown-toggle={id}
        className="fa-solid fa-ellipsis-vertical"
      ></i>

      <div
        id={id}
        className="z-10 hidden bg-slate-50 divide-y divide-gray-100 rounded-lg shadow-sm w-24 "
      >
        <ul
          className="py-2 text-sm text-gray-700 "
          aria-labelledby="multiLevelDropdownButton"
        >
          <li>
            <Link
              to={`/tenantDetails/${id}`}
              className="block px-4 py-2 cursor-pointer text-mainColor hover:bg-gray-100 "
            >
              View <i className=" ms-2 fa-solid fa-eye"></i>
            </Link>
          </li>
          <li>
            <a
              onClick={opneModal}
              className="block px-4 py-2 cursor-pointer text-mainColor hover:bg-gray-100 "
            >
              Edit <i className="ms-2 fa-solid fa-pen"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
