import { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  // const checkLocalStorage = () => {
  //   if (window.localStorage.getItem("auth")) {
  //     setToken(JSON.parse(window.localStorage.getItem("auth")));
  //   }
  // };

  // useEffect(() => {
  //   checkLocalStorage();
  // }, []);

  console.log("provider", token);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
