import React, { useEffect, useState } from "react";
import { createContext } from "react";
export let AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    let tokenSimulate = localStorage.getItem("userInfo");
    if (tokenSimulate) {
      setUserData(JSON.parse(tokenSimulate));
    } else {
      setUserData(false);
    }
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ userData, setUserData }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
