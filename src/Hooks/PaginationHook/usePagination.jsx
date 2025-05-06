import { useState, useEffect } from "react";

export default function usePagination(number = 1) {
  const [getPageNum, setGetPageNumber] = useState(number);

  useEffect(() => {
    setGetPageNumber(number);
  }, [number]);

  return { getPageNum };
}
