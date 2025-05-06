import React from "react";

export default function Pagination({
  next,
  prev,
  CurntPag,
  NumberOfPages,
  handlePageClick,
}) {
  let num = [];
  for (let i = 1; i <= NumberOfPages; i++) {
    num.push(i);
  }

  function getNumber(e) {
    const pageSpcific = e.target.getAttribute("data-page");
    const number = Number(pageSpcific);
    handlePageClick(number);
  }

  return (
    <nav className="mt-6" aria-label="Page navigation">
      <ul className="flex items-center justify-center -space-x-px h-8 text-xs sm:text-sm">
        <li onClick={prev}>
          <button className="flex items-center justify-center px-3 h-8 text-mainColor bg-white border border-e-0 rounded-s-lg hover:bg-gray-100">
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>

        {num.map((el) => (
          <li key={el}>
            <button
              data-page={el}
              onClick={getNumber}
              className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                CurntPag === el
                  ? "bg-mainColor text-white"
                  : "bg-white text-mainColor"
              } hover:bg-mainColor hover:text-white`}
            >
              {el}
            </button>
          </li>
        ))}

        <li onClick={next}>
          <button className="flex items-center justify-center px-3 h-8 text-mainColor bg-white border rounded-e-lg hover:bg-gray-100">
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
